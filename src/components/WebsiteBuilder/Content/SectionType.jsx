import { SECTION_TYPES } from "../../../constants/constants";
import Wide from "./Sections/Wide";
import Medium from "./Sections/Medium";
import Small from "./Sections/Small";
import FullWidth from "./Sections/FullWidth";

const SectionType = ({ section }) => {
  switch (section.type) {
    case SECTION_TYPES.FULL_WIDTH:
      return <FullWidth {...section} />;
    case SECTION_TYPES.WIDE:
      return <Wide {...section} />;
    case SECTION_TYPES.MEDIUM:
      return <Medium {...section} />;
    case SECTION_TYPES.SMALL:
    default:
      return <Small {...section} />;
  }
};

export default SectionType;
