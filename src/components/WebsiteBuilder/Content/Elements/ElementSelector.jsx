import { ELEMENT_TYPES } from "../../../../constants/constants";
import AddNew from "./NewElement";
import Headline from "./Headline";
import Image from "./Image";
import Paragraph from "./Paragraph";

const ElementSelector = ({ type, element }) => {  
  switch (type) {
    case ELEMENT_TYPES.HEADLINE:
      return <Headline {...element} />;
    case ELEMENT_TYPES.IMAGE:
      return <Image {...element} />;
    case ELEMENT_TYPES.PARAGRAPH:
      return <Paragraph {...element} />;
    case ELEMENT_TYPES.NEW:
    default:
      return <AddNew {...element} />;
  }
};

export default ElementSelector;
