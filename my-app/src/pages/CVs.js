// ./docs/Aingthawan_CVs.pdf
// page for viewing CVs pdf

import React from "react";
import { Document, Page } from "react-pdf";


function CVs() {
  return (
    <div>
      <Document
        file="./docs/Aingthawan_CVs.pdf"
        onLoadSuccess={console.log("success")}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default CVs;