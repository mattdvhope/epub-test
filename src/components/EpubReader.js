import React from 'react';
import { ReactReader } from 'react-reader';
import useLocalStorageState from 'use-local-storage-state';

export const EpubReader = ({ epubUrl }) => {
  const [location, setLocation] = useLocalStorageState('epub-location', 0); // Initialize location to 0

  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url={epubUrl} // URL of the EPUB file
        location={location} // Current location in the book
        locationChanged={setLocation} // Update location on change
        epubOptions={{
          allowScriptedContent: true,
          allowPopups: false,
          manager: 'paginated', // Use paginated flow
          flow: "default", // Ensure you're using the default flow
        }}
      />
    </div>
  );
};

export default EpubReader;
