export const GenerateHeaderCols = () => {
  return [
    {
      headerName: "Gaggler",
      field: "golfer",
      pinned: "left",
    },
    {
      headerName: "Country View",
      children: [
        {
          headerName: "Week 1",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "CV",
          children: [{ field: "Total" }],
        },
      ],
    },
    {
      headerName: "Maple Gate",
      children: [
        {
          headerName: "Week 1",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "Week 3",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "MG",
          children: [{ field: "Total" }],
        },
      ],
    },
    {
      headerName: "Heather Hill",
      children: [
        {
          headerName: "Week 1",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "HH",
          children: [{ field: "Total" }],
        },
      ],
    },
    {
      headerName: "Crystal Lake",
      children: [
        {
          headerName: "Week 1",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "CL",
          children: [{ field: "Total" }],
        },
      ],
    },
    {
      headerName: "New England",
      children: [
        {
          headerName: "Week 1",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "Week 2",
          children: [
            { field: "handicap" },
            { field: "actual" },
            { field: "net" },
          ],
        },
        {
          headerName: "NE",
          children: [{ field: "Total" }],
        },
      ],
    },
  ];
};

export const GenerateTableData = () => [
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29" },
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
  { golfer: "Ed", handicap: "23", actual: "41", net: "29" },
];

export const GenerateBottomHeaders = () => {};

export const GenerateBottomTableData = () => [
  { golfer: "Jacob", handicap: "24", actual: "41", net: "29" },
];
