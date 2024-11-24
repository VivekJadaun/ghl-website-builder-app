import { generateId } from "../helpers/stringHelper";

export const DEFAULT_SECTIONS = [
  { id: generateId(), type: 4, position: 0 },
  { id: generateId(), type: 1, position: 1 },
  { id: generateId(), type: 3, position: 2 },
];

export const DEFAULT_SMALL_SECTION_ROWS = [];

export const DEFAULT_MEDIUM_SECTION_ROWS = [
  { id: generateId(), columns: 3, position: 0 }
];

export const DEFAULT_WIDE_SECTION_ROWS = [
  { id: generateId(), columns: 3, position: 0 }
];

export const DEFAULT_FULLWIDTH_SECTION_ROWS = [
  { id: generateId(), columns: 1, position: 0 }
];

export const getDefaultRowBySectionType = (type) => {
  switch (type) {
    case 1:
      return DEFAULT_FULLWIDTH_SECTION_ROWS; 
    case 2:
      return DEFAULT_WIDE_SECTION_ROWS; 
    case 3:
      return DEFAULT_MEDIUM_SECTION_ROWS; 
    case 4:  
    default:
      return DEFAULT_SMALL_SECTION_ROWS; 
  }
}