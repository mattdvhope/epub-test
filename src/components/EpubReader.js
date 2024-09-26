import React, { useState, useEffect } from 'react';
import { ReactReader } from 'react-reader';

export const EpubReader = ({ epubUrl }) => {
  const [location, setLocation] = useState(localStorage.getItem('epub-location') || 0); // Initialize location to 0

  const onLocationChanged = (epubcfi) => {
    setLocation(epubcfi);
    localStorage.setItem('epub-location', epubcfi);
  }

  useEffect(() => {
    const savedLocation = localStorage.getItem('epub-location');
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  return (
  <div style={{ height: '100vh' }}>
    <ReactReader
      url={epubUrl}                         // URL of the EPUB file
      location={location}                   // Current location in the book
      locationChanged={onLocationChanged} // Update location on change
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
