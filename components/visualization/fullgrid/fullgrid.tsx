"use client";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "./fullgrid.css";
import { useEffect, useRef, useState } from "react";
import {
  GenerateBottomHeaders,
  GenerateBottomTableData,
  GenerateHeaderCols,
  GenerateTableData,
} from "./helpers";

const FullGrid = () => {
  const [rowData, setRowData] = useState(GenerateTableData());
  const [bottomRowData, setBottomRowData] = useState(GenerateBottomTableData());
  const topGrid = useRef<AgGridReact>(null);
  const bottomGrid = useRef<AgGridReact>(null);
  const baseClassName = "example-container";
  const themeClassName = "ag-theme-quartz-dark";
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
        className={`${baseClassName} ${themeClassName}`}
      >
        <AgGridReact
          ref={topGrid}
          alignedGrids={[bottomGrid]}
          suppressHorizontalScroll
          alwaysShowVerticalScroll
          rowData={rowData}
          columnDefs={GenerateHeaderCols() as any}
          autoSizeStrategy={autoSizeStrategy as any}
        />
        <AgGridReact
          ref={bottomGrid}
          alignedGrids={[topGrid]}
          rowData={bottomRowData}
          columnDefs={GenerateBottomHeaders() as any}
          headerHeight={0}
          alwaysShowVerticalScroll
          rowStyle={{ fontWeight: "bold" }}
        />
      </div>
    </>
  );
};

export default FullGrid;

const autoSizeStrategy = { type: "fitCellContents" };
