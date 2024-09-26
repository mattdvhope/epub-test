import React from "react";
import EpubReader from "../components/EpubReader";

const IndexPage = () => {
  return (
    <div>
      <EpubReader epubUrl="/The-Source-of-All-Wealth.epub" />
    </div>
  );
};

export default IndexPage;
