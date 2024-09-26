import React, { useState } from 'react';
import { ReactReader } from 'react-reader';

export const EpubReader = ({ epubUrl }) => {
  const [location, setLocation] = useState(0); // Initialize location to 0

  return (
  <div style={{ height: '100vh' }}>
    <ReactReader
      url={epubUrl}                         // URL of the EPUB file
      location={location}                   // Current location in the book
      locationChanged={(epubcfi) => setLocation(epubcfi)} // Update location on change
      epubOptions={{
        allowScriptedContent: true,
        allowPopups: false,
        manager: 'continuous',
        flow: "scrolled",
        offset: 0
      }}
    />
  </div>
  );
};

export default EpubReader;
