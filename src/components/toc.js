// src/components/toc.js
export const goToTOC = (bookRef, setCurrentLocation) => {
  if (bookRef.current) {
    const toc = bookRef.current.navigation.toc; // Access the TOC directly
    if (toc && toc.length > 0) {
      // Adjust index based on your specific TOC structure
      const firstTOCEntry = toc[5]; 
      bookRef.current.rendition.display(firstTOCEntry.href).then(() => {
        console.log("Navigated to:", firstTOCEntry.label);
        setCurrentLocation(bookRef.current.locations.current); // Update the current location
      }).catch(err => {
        console.error("Error navigating to TOC:", err);
      });
    } else {
      console.warn("No TOC available");
    }
  }
};
