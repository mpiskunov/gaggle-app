import { CompanyRenderer } from "@/components/icons/DoveIcon";

export const GenerateHeaderCols = () => {
  return [
    {
      headerName: "",
      children: [
        {
          headerName: "",
          children: [
            {
              headerName: "NT",
              field: "netTotal",
              pinned: "left",
              resizable: false,
              width: 40,
              wrapText: true,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#a8ffa8" },
            },
            {
              field: "golfer",
              pinned: "left",
              resizable: false,
              width: 80,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#a8ffa8" },
            },
            {
              field: "flock_order",
              pinned: "left",
              resizable: false,
              width: 100,
              type: "leftAligned",
              cellStyle: { backgroundColor: "#a8ffa8" },
              cellRenderer: CompanyRenderer,
            },
          ],
        },
      ],
      field: "netTotal",
      resizable: false,
    },
    {
      headerName: "Country View",
      type: "rightAligned",
      children: [
        {
          headerName: "Week 1",
          children: [
            {
              headerName: "HC",
              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" }, //#ffa8ad
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" }, //#a8ffa8
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "CV",
          children: [
            {
              field: "Total",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#a8ffa8" },
            },
          ],
        },
      ],
    },
    {
      headerName: "Maple Gate",
      children: [
        {
          headerName: "Week 1",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 3",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "MG",
          children: [
            {
              field: "Total",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#a8ffa8" },
            },
          ],
        },
      ],
    },
    {
      headerName: "Heather Hill",
      children: [
        {
          headerName: "Week 1",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "HH",
          children: [
            {
              field: "Total",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#a8ffa8" },
            },
          ],
        },
      ],
    },
    {
      headerName: "Crystal Lake",
      children: [
        {
          headerName: "Week 1",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "CL",
          children: [
            {
              field: "Total",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#a8ffa8" },
            },
          ],
        },
      ],
    },
    {
      headerName: "New England",
      children: [
        {
          headerName: "Week 1",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              headerName: "HC",

              field: "hc",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#f8ffa8" },
            },
            {
              field: "actual",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#ffa8ad" },
            },
            {
              field: "net",
              width: 60,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "NE",
          children: [
            {
              field: "Total",
              width: 60,
              type: "rightAligned",
              cellStyle: { backgroundColor: "#a8ffa8" },
            },
          ],
        },
      ],
    },
    {
      headerName: "",
      children: [
        {
          headerName: "",
          children: [
            {
              headerName: "Final",
              width: 60,
              pinned: "right",
              type: "rightAligned",
              cellStyle: { backgroundColor: "#4ec74e" },
            },
          ],
        },
      ],
    },
  ];
};

export const GenerateTableData = () => [
  {
    golfer: "Jacob",
    flock_order: 1,
    hc: "24",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Ed",
    flock_order: 2,
    hc: "23",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Jacob",
    flock_order: 3,
    hc: "24",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Ed",
    flock_order: 1,
    hc: "23",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Jacob",
    flock_order: 3,
    hc: "24",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Ed",
    flock_order: 2,
    hc: "23",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Jacob",
    flock_order: 2,
    hc: "24",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Ed",
    flock_order: 4,
    hc: "23",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Jacob",
    flock_order: 1,
    hc: "24",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Ed",
    flock_order: 0,
    hc: "23",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Jacob",
    flock_order: 1,
    hc: "24",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Ed",
    flock_order: 0,
    hc: "23",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Jacob",
    flock_order: 0,
    hc: "24",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Ed",
    flock_order: 1,
    hc: "23",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Jacob",
    flock_order: 3,
    hc: "24",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
  {
    golfer: "Ed",
    flock_order: 3,
    hc: "23",
    actual: "41",
    net: "29",
    netTotal: "30",
  },
];

export const GenerateBottomHeaders = () => [
  {
    headerName: "",
    resizable: false,
    children: [
      { field: "netTotal", pinned: "left", width: 60, type: "rightAligned" },
      {
        valueGetter: () => "Birdies",
        pinned: "left",
        width: 60,
        type: "rightAligned",
      },
    ],
  },
  {
    headerName: "Country View",
    children: [
      {
        headerName: "Week 1",
        valueGetter: () => "hellwo world",
        width: 80,
        type: "rightAligned",
      },
      {
        headerName: "Week 2",
        valueGetter: () => "test",
        width: 80,
        type: "rightAligned",
      },
      {
        headerName: "CV",
        children: [
          { valueGetter: () => "test", width: 60, type: "rightAligned" },
        ],
      },
    ],
  },
  {
    headerName: "Maple Gate",
    children: [
      {
        headerName: "Week 1",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "Week 2",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "Week 3",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "MG",
        children: [
          { valueGetter: () => "test", width: 60, type: "rightAligned" },
        ],
      },
    ],
  },
  {
    headerName: "Heather Hill",
    children: [
      {
        headerName: "Week 1",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "Week 2",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "HH",
        children: [
          { valueGetter: () => "test", width: 60, type: "rightAligned" },
        ],
      },
    ],
  },
  {
    headerName: "Crystal Lake",
    children: [
      {
        headerName: "Week 1",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "Week 2",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "CL",
        children: [
          { valueGetter: () => "test", width: 60, type: "rightAligned" },
        ],
      },
    ],
  },
  {
    headerName: "New England",
    children: [
      {
        headerName: "Week 1",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "Week 2",
        valueGetter: () => "test",
        width: 270,
        type: "rightAligned",
      },
      {
        headerName: "NE",
        children: [
          { valueGetter: () => "test", width: 60, type: "rightAligned" },
        ],
      },
    ],
  },
  {
    headerName: "",
    children: [
      {
        headerName: "",
        children: [
          {
            valueGetter: () => "Winner!",
            width: 60,
            pinned: "right",
            type: "rightAligned",
          },
        ],
      },
    ],
  },
];

export const GenerateBottomTableData = () => [
  { golfer: "Jacob", hc: "24", actual: "41", net: "29", netTotal: "30" },
];
