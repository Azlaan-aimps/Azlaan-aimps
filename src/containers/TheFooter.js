import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        <span className="mr-1">Product by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Veriteam Software Solutions
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
