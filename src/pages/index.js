import React from "react";
import EpubReader from "../components/EpubReader";

const IndexPage  = () => {
  return (
    <div>
      <EpubReader epubUrl="/Joes-Book-Generic.epub" />
    </div>
  );
};

export default IndexPage;
