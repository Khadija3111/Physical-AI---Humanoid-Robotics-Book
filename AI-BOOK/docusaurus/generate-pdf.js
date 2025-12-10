const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const express = require('express'); // To serve the built Docusaurus site
const merge = require('pdf-merge'); // To merge PDFs (optional)

const siteDir = path.join(__dirname, 'build'); // Your Docusaurus build output directory
const outputDir = path.join(__dirname, 'pdf_output');
const baseUrl = 'http://localhost:8080'; // The URL where your Docusaurus site will be served

async function getDocLinks(browser) {
    const page = await browser.newPage();
    // Assuming your sidebar navigation links are discoverable
    // You might need to adjust this selector based on your Docusaurus theme
    await page.goto(`${baseUrl}/docs/`, { waitUntil: 'networkidle0' });

    // This is a generic selector. You'll likely need to inspect your Docusaurus site's HTML
    // to find the exact selector for your sidebar navigation links.
    // E.g., `a.menu__link` or `a.doc-sidebar-items__link`
    const links = await page.evaluate(() => {
        const docLinks = Array.from(document.querySelectorAll('.theme-doc-sidebar-item-link a'))
                             .map(a => a.href)
                             .filter(href => href.startsWith(window.location.origin + '/docs/'));
        // Deduplicate links
        return [...new Set(docLinks)];
    });
    await page.close();
    return links;
}

async function generatePdf() {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const app = express();
    app.use(express.static(siteDir));
    const server = app.listen(8080, () => console.log(`Serving Docusaurus site from ${siteDir} on ${baseUrl}`));

    const browser = await puppeteer.launch({ headless: true });

    try {
        let docLinks = await getDocLinks(browser);
        // Fallback for getting links if initial method fails or is incomplete
        if (docLinks.length === 0) {
            console.warn("Could not find documentation links using generic selector. Trying to infer from build directory...");
            // This is a rough fallback: find all HTML files under 'build/docs'
            const docBuildPath = path.join(siteDir, 'docs');
            if (fs.existsSync(docBuildPath)) {
                // Read all files recursively, then filter for .html and construct URLs
                const files = await fs.promises.readdir(docBuildPath, { recursive: true, withFileTypes: true });
                docLinks = files
                             .filter(dirent => dirent.isFile() && dirent.name.endsWith('.html') && !dirent.name.includes('index.html'))
                             .map(dirent => {
                                 // dirent.path is the directory of the file relative to docBuildPath
                                 const relativePath = path.relative(docBuildPath, path.join(dirent.path, dirent.name));
                                 return `${baseUrl}/docs/${relativePath.replace(/\\/g, '/').replace('.html', '')}`;
                             });
                docLinks = [...new Set(docLinks)]; // Deduplicate
            }
        }
        
        if (docLinks.length === 0) {
            console.error("No documentation links found to generate PDFs. Please check your Docusaurus site structure and the `getDocLinks` function's selector.");
            return;
        }

        console.log(`Found ${docLinks.length} documentation pages.`);
        const generatedPdfs = [];

        for (const link of docLinks) {
            const page = await browser.newPage();
            // Optional: inject print-specific CSS
            await page.evaluateOnNewDocument(() => {
                const style = document.createElement('style');
                style.type = 'text/css';
                // Adjust for Docusaurus-specific elements
                style.innerHTML = `
                    /* Hide sidebar, navbar, footer in print */
                    .navbar, .doc-sidebar, .footer {
                        display: none !important;
                    }
                    /* Ensure main content takes full width */
                    .docMainContainer_node_modules-\@docusaurus-theme-classic-lib-theme-DocItem-styles-module,
                    .main-wrapper {
                        max-width: 100% !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    /* Adjust fonts and line heights for print */
                    body {
                        font-size: 10pt;
                        line-height: 1.5;
                    }
                    /* Add page breaks before new sections/headings if desired */
                    h1 { page-break-before: always; margin-top: 2em; }
                    h2 { page-break-before: auto; margin-top: 1.5em; }
                `;
                document.head.appendChild(style);
            });

            await page.goto(link, { waitUntil: 'networkidle0' });

            const title = await page.title();
            const fileName = `${title.replace(/[^a-z0-9]/gi, '_')}.pdf`;
            const outputPath = path.join(outputDir, fileName);

            console.log(`Generating PDF for "${title}" (${link})`);
            await page.pdf({
                path: outputPath,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '20mm',
                    right: '20mm',
                    bottom: '20mm',
                    left: '20mm'
                }
            });
            generatedPdfs.push(outputPath);
            await page.close();
        }

        if (generatedPdfs.length > 0) {
            console.log(`Generated ${generatedPdfs.length} individual PDFs in ${outputDir}`);
            // Optional: Merge all PDFs into one
            const finalPdfPath = path.join(outputDir, 'Docusaurus_Book.pdf');
            console.log(`Merging all PDFs into ${finalPdfPath}...`);
            await merge(generatedPdfs, finalPdfPath);
            console.log('Successfully merged all PDFs into a single file!');
        }

    } catch (error) {
        console.error('Error during PDF generation:', error);
    } finally {
        await browser.close();
        server.close(() => console.log('Local server stopped.'));
    }
}

generatePdf();
