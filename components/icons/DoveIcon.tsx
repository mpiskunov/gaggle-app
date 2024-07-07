import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";

// const IconRenderer = () => <FontAwesomeIcon icon={faGithub} />;

// export default IconRenderer;

import { ICellRendererParams } from "ag-grid-community";

export function CompanyRenderer(params: ICellRendererParams) {
  //const comp = <FontAwesomeIcon icon={faStar} />;
  const componentArray = Array.from({ length: params.value }); // Create array with length

  const compList = componentArray.map((item, index) => {
    return <FontAwesomeIcon key={index} icon={faStar} />;
  });
  return compList;
}
