import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Chatbot from '@site/src/components/Chatbot';
import styles from './index.module.css';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics
        </Heading>
        <p className="hero__subtitle">
          Your comprehensive guide to building intelligent robots that perceive, reason, and act in the physical world.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction to physical AI and humanoid robotics/overview"
            style={{ backgroundColor: 'var(--ifm-color-secondary)', color: 'black' }}> {/* Apply secondary color directly and set text color to black */}
            Start Reading &nbsp;→
          </Link>
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
<Chatbot></Chatbot>
    </Layout>
  );
}