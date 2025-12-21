import React from 'react';
import DocItem from '@theme-original/DocItem';
import Chatbot from '@site/src/components/Chatbot'; // Import the Chatbot component

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Chatbot /> {/* Render the Chatbot component */}
    </>
  );
}
