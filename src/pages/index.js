import React from "react";
import EpubReader from "../components/EpubReader";

const IndexPage  = () => {
  return (
    <div>
      <EpubReader epubUrl="/Tarzan.epub" />
    </div>
  );
};

export default IndexPage;
