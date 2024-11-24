import { ELEMENT_TYPES } from "./constants";

const DEFAULT_HEADLINE_TEXT = "Heading Text Goes Here";

const DEFAULT_PARAGRAPH_TEXT =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem architecto quas mollitia voluptates iure consequuntur totam numquam quasi quaerat, iste, libero asperiores optio praesentium autem culpa doloremque laudantium in deleniti, corrupti eaque illo nam quae. Vel nesciunt, libero ipsa similique ipsum ducimus fuga magni. Voluptatum iste pariatur cum doloremque est.";

const DEFAULT_SECTION_IDS = {
  FIRST_SECTION: "section-1",
  SECOND_SECTION: "section-2",
  THIRD_SECTION: "section-3",
};

const DEFAULT_ROW_IDS = {
  FIRST_ROW: "row-1",
  SECOND_ROW: "row-2",
};

const DEFAULT_ELEMENT_IDS = {
  FIRST_ELEMENT: "element-1",
  SECOND_ELEMENT: "element-2",
  THIRD_ELEMENT: "element-3",
  FOURTH_ELEMENT: "element-4",
};

export const DEFAULT_SECTIONS = [
  { id: DEFAULT_SECTION_IDS.FIRST_SECTION, type: 4, position: 0 },
  { id: DEFAULT_SECTION_IDS.SECOND_SECTION, type: 1, position: 1 },
  { id: DEFAULT_SECTION_IDS.THIRD_SECTION, type: 3, position: 2 },
];

export const DEFAULT_ROWS = [
  {
    id: DEFAULT_ROW_IDS.FIRST_ROW,
    columns: 1,
    position: 0,
    parentId: DEFAULT_SECTION_IDS.SECOND_SECTION,
  },
  {
    id: DEFAULT_ROW_IDS.SECOND_ROW,
    columns: 3,
    position: 0,
    parentId: DEFAULT_SECTION_IDS.THIRD_SECTION,
  },
];

export const DEFAULT_HEADLINE_ELEMENT_DATA = { text: DEFAULT_HEADLINE_TEXT };
export const DEFAULT_PARAGRAPH_ELEMENT_DATA = { text: DEFAULT_PARAGRAPH_TEXT };
export const DEFAULT_IMAGE_ELEMENT_DATA = {
  src: "",
  height: 200,
  width: 400,
  alt: "",
};

export const DEFAULT_ELEMENTS = [
  {
    id: DEFAULT_ELEMENT_IDS.FIRST_ELEMENT,
    type: ELEMENT_TYPES.HEADLINE,
    position: 0,
    column: 0,
    parentId: DEFAULT_ROW_IDS.FIRST_ROW,
    data: DEFAULT_HEADLINE_ELEMENT_DATA,
  },
  {
    id: DEFAULT_ELEMENT_IDS.SECOND_ELEMENT,
    type: ELEMENT_TYPES.PARAGRAPH,
    position: 1,
    column: 0,
    parentId: DEFAULT_ROW_IDS.FIRST_ROW,
    data: DEFAULT_PARAGRAPH_ELEMENT_DATA,
  },
  {
    id: DEFAULT_ELEMENT_IDS.THIRD_ELEMENT,
    type: ELEMENT_TYPES.HEADLINE,
    position: 0,
    column: 0,
    parentId: DEFAULT_ROW_IDS.SECOND_ROW,
    data: DEFAULT_HEADLINE_ELEMENT_DATA,
  },
  {
    id: DEFAULT_ELEMENT_IDS.FOURTH_ELEMENT,
    type: ELEMENT_TYPES.PARAGRAPH,
    position: 1,
    column: 0,
    parentId: DEFAULT_ROW_IDS.SECOND_ROW,
    data: DEFAULT_PARAGRAPH_ELEMENT_DATA,
  },
];

export const getDefaultElementDataByType = (type) => {
  switch (type) {
    case ELEMENT_TYPES.HEADLINE:
      return DEFAULT_HEADLINE_ELEMENT_DATA;
    case ELEMENT_TYPES.PARAGRAPH:
      return DEFAULT_PARAGRAPH_ELEMENT_DATA;
    case ELEMENT_TYPES.IMAGE:
      return DEFAULT_IMAGE_ELEMENT_DATA;
    default:
      return null;
  }
};
