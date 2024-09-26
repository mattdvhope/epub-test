// src/components/bookmark.js
export const saveBookmark = (bookRef) => {
  if (bookRef.current) {
    const currentLocation = bookRef.current.rendition.currentLocation();
    console.log(currentLocation);
    const cfi = currentLocation?.start?.cfi;

    console.log("Current Location CFI:", cfi); // Log the CFI to check if it's valid

    if (cfi) {
      localStorage.setItem("bookmark", cfi); // Save the bookmark to local storage
      console.log("Bookmark saved:", cfi);
    } else {
      console.log("No CFI found for current location.");
    }
  } else {
    console.log("Book reference is not available.");
  }
};

// Load the bookmark
export const loadBookmark = () => {
  const bookmark = localStorage.getItem("bookmark");
  console.log("Loaded bookmark:", bookmark); // Log the loaded bookmark
  return bookmark;
};
