import React from "react";
import EpubReader from "../components/EpubReader";

const IndexPage = () => {
  return (
    <div>
      <EpubReader epubUrl="/Epub-dummy.epub" />
    </div>
  );
};

export default IndexPage;
