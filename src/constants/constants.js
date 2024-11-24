export const SECTION_TYPES = {
  FULL_WIDTH: 1,
  WIDE: 2,
  MEDIUM: 3,
  SMALL: 4,
};

export const ROW_TYPES = {
  SINGLE_COLUMN: 1,
  DUAL_COLUMN: 2,
  TRIPLE_COLUMN: 3,
};

export const COLUMN_OPTIONS = [
  { label: "1 Column", enabled: true, type: ROW_TYPES.SINGLE_COLUMN },
  { label: "2 Column", enabled: true, type: ROW_TYPES.DUAL_COLUMN },
  { label: "3 Column", enabled: true, type: ROW_TYPES.TRIPLE_COLUMN },
  { label: "4 Column", enabled: false },
  { label: "5 Column", enabled: false },
  { label: "6 Column", enabled: false },
  { label: "Left Sidebar", enabled: false },
  { label: "Right Sidebar", enabled: false },
];
