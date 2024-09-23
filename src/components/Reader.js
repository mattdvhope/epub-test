import React, { useEffect, useRef } from 'react';
import ePub from 'epubjs';

const epubPath = "/epub-test.epub";

const Reader = () => {
  const readerRef = useRef(null);

  useEffect(() => {
    const book = ePub(epubPath);
    const rendition = book.renderTo(readerRef.current, {
      width: "100%",
      height: "100%",
    });

    rendition.display();

    return () => {
      book.destroy();
    };
  }, []);

  return (
    <div ref={readerRef} style={{ height: '100vh', width: '100%' }}>
      {/* Epub.js will render the EPUB content here */}
    </div>
  );
};

export default Reader;
