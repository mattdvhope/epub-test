// src/components/navigation.js
export const nextPage = (bookRef, setCurrentLocation) => {
  if (bookRef.current) {
    bookRef.current.rendition.next().then(() => {
      console.log("Moved to the next page");
      setCurrentLocation(bookRef.current.locations.current);
    });
  }
};

export const prevPage = (bookRef, setCurrentLocation) => {
  if (bookRef.current) {
    bookRef.current.rendition.prev().then(() => {
      console.log("Moved to the previous page");
      setCurrentLocation(bookRef.current.locations.current);
    });
  }
};
