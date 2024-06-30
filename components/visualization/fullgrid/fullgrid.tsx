"use client";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "ag-grid-community/styles/ag-theme-balham.css"; // Optional Theme applied to the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import "./fullgrid.css";
import { useEffect, useRef, useState } from "react";
import { GenerateBottomHeaders, GenerateBottomTableData, GenerateHeaderCols, GenerateTableData } from "./helpers";

const FullGrid = () => {
  const [rowData, setRowData] = useState(GenerateTableData());
  const [bottomRowData, setBottomRowData] = useState(GenerateBottomTableData());
  const topGrid = useRef<AgGridReact>(null);
  const bottomGrid = useRef<AgGridReact>(null);
  const baseClassName = "example-container";
  const themeClassName = "ag-theme-balham";
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }} className={`${baseClassName} ${themeClassName}`}>
        <AgGridReact
          ref={topGrid}
          alignedGrids={[bottomGrid]}
          //suppressHorizontalScroll
          alwaysShowVerticalScroll
          rowData={rowData}
          columnDefs={GenerateHeaderCols() as any}
          gridOptions={{
            defaultColDef: { resizable: false },
          }}
        />
        <AgGridReact
          ref={bottomGrid}
          alignedGrids={[topGrid]}
          rowData={bottomRowData}
          columnDefs={GenerateBottomHeaders() as any}
          headerHeight={0}
          suppressHorizontalScroll
          alwaysShowVerticalScroll
          rowStyle={{ fontWeight: "bold" }}
          gridOptions={{
            rowHeight: 150,
            defaultColDef: { wrapText: true },
          }}
        />
      </div>
    </>
  );
};

export default FullGrid;

const autoSizeStrategy = { type: "fitCellContents" };
