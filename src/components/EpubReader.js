import React from 'react';
import { ReactReader } from 'react-reader';
import useLocalStorageState from 'use-local-storage-state';

export const EpubReader = ({ epubUrl }) => {
  const [location, setLocation] = useLocalStorageState('epub-location', 0); // Initialize location to 0

  const onLocationChanged = (epubcfi) => {
    setLocation(epubcfi);
  };

  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url={epubUrl} // URL of the EPUB file
        location={location} // Current location in the book
        locationChanged={onLocationChanged} // Update location on change
        epubOptions={{
          allowScriptedContent: true,
          allowPopups: false,
          offset: 0
        }}
        renderIframe={(iframe) => {
          return (
            <iframe
              title="Ebook Reader" // Unique title for accessibility
              src={iframe.src}
              sandbox="allow-scripts" // Adjust as necessary for security
            />
          );
        }}
      />
    </div>
  );
};

export default EpubReader;
