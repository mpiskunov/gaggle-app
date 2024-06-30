export const GenerateHeaderCols = () => {
  return [
    {
      headerName: "",
      children: [
        {
          headerName: "",
          children: [
            {
              headerName: "Net Total",
              field: "netTotal",
              pinned: "left",
              resizable: false,
              width: 90,
              wrapText: true,
              type: "rightAligned",
              cellStyle: { "background-color": "#a8ffa8" },
            },
            {
              field: "golfer",
              pinned: "left",
              resizable: false,
              width: 130,
              type: "rightAligned",
              cellStyle: { "background-color": "#a8ffa8" },
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
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" }, //#ffa8ad
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" }, //#a8ffa8
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "CV",
          children: [
            {
              field: "Total",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#a8ffa8" },
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
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 3",
          children: [
            {
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "MG",
          children: [
            {
              field: "Total",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#a8ffa8" },
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
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "HH",
          children: [
            {
              field: "Total",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#a8ffa8" },
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
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "CL",
          children: [
            {
              field: "Total",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#a8ffa8" },
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
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            {
              field: "handicap",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#f8ffa8" },
            },
            {
              field: "actual",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#ffa8ad" },
            },
            {
              field: "net",
              width: 90,
              type: "rightAligned",
            },
          ],
        },
        {
          headerName: "NE",
          children: [
            {
              field: "Total",
              width: 90,
              type: "rightAligned",
              cellStyle: { "background-color": "#a8ffa8" },
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
              width: 90,
              pinned: "right",
              type: "rightAligned",
              cellStyle: { "background-color": "#4ec74e" },
            },
          ],
        },
      ],
    },
  ];
};

export const GenerateTableData = () => [
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29", netTotal: "30" },
];

export const GenerateBottomHeaders = () => [
  {
    headerName: "",
    resizable: false,
    children: [
      { field: "netTotal", pinned: "left", width: 90, type: "rightAligned" },
      {
        valueGetter: () => "Birdies",
        pinned: "left",
        width: 130,
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
        headerName: "CV",
        children: [
          { valueGetter: () => "test", width: 90, type: "rightAligned" },
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
          { valueGetter: () => "test", width: 90, type: "rightAligned" },
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
          { valueGetter: () => "test", width: 90, type: "rightAligned" },
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
          { valueGetter: () => "test", width: 90, type: "rightAligned" },
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
          { valueGetter: () => "test", width: 90, type: "rightAligned" },
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
            width: 90,
            pinned: "right",
            type: "rightAligned",
          },
        ],
      },
    ],
  },
];

export const GenerateBottomTableData = () => [
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29", netTotal: "30" },
];
