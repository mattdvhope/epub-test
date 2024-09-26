import React, { useEffect, useRef } from 'react';
import Epub from 'epubjs';

const EpubReader = ({ epubUrl }) => {
  const viewerRef = useRef(null);
  const bookRef = useRef(null);

  useEffect(() => {
    const book = Epub(epubUrl);
    bookRef.current = book; // Store book reference for later use

    const rendition = book.renderTo(viewerRef.current, {
      manager: "continuous",
      // method: "continuous",
      flow: "scrolled",
      width: "100%",
      height: "100vh",
    });

    book.ready.then(() => {
      console.log("Book spine items:", book.spine.items);
      rendition.display(book.spine.items[0].href); // Start with the first section
    }).catch(err => {
      console.error("Error loading book:", err);
    });

    return () => {
      book.destroy(); // Clean up when the component unmounts
    };
  }, [epubUrl]); // useEffect

  return <div id="viewer" ref={viewerRef} ></div>;
};

export default EpubReader;
