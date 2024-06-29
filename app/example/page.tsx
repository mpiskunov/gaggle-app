"use client";
import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./example.css";
import {
  GenerateHeaderCols,
  GenerateTableData,
} from "@/components/visualization/fullgrid/helpers";

const bottomData = [
  {
    athlete: "Total",
    age: "15 - 61",
    country: "Ireland",
    year: "2020",
    date: "26/11/1970",
    sport: "Synchronised Riding",
    gold: 55,
    silver: 65,
    bronze: 12,
  },
];

const GridExample = () => {
  const [rowData, setRowData] = useState(null);
  const topGrid = useRef<AgGridReact>(null);
  const bottomGrid = useRef<AgGridReact>(null);

  const defaultColDef = {
    filter: true,
    flex: 1,
    minWidth: 100,
  };

  const autoSizeStrategy = {
    type: "fitCellContents",
  };

  const baseClassName = "example-container";
  const themeClassName = "ag-theme-quartz-dark";

  return (
    <div
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      className={`${baseClassName} ${themeClassName}`}
    >
      <div style={{ flex: "1 1 auto" }}>
        <AgGridReact
          ref={topGrid}
          alignedGrids={[bottomGrid]}
          rowData={GenerateTableData()}
          defaultColDef={defaultColDef}
          columnDefs={GenerateHeaderCols() as any}
          suppressHorizontalScroll
          alwaysShowVerticalScroll
          autoSizeStrategy={autoSizeStrategy as any}
        />
      </div>

      <div style={{ flex: "none", height: "60px" }}>
        <AgGridReact
          ref={bottomGrid}
          alignedGrids={[topGrid]}
          rowData={GenerateTableData()}
          defaultColDef={defaultColDef}
          columnDefs={GenerateHeaderCols() as any}
          headerHeight={0}
          alwaysShowVerticalScroll
          rowStyle={{ fontWeight: "bold" }}
        />
      </div>
    </div>
  );
};

export default GridExample;
