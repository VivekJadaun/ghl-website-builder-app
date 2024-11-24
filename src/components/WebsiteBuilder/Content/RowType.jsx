import { ROW_TYPES } from "../../../constants/constants";
import TripleColumnRow from "./Row/TripleColumnRow";
import DualColumnRow from "./Row/DualColumnRow";
import SingleColumnRow from "./Row/SingleColumnRow";

const RowType = ({ row }) => {
  switch (row.type) {
    case ROW_TYPES.TRIPLE_COLUMN:
      return <TripleColumnRow {...row} />;
    case ROW_TYPES.DUAL_COLUMN:
      return <DualColumnRow {...row} />;
    case ROW_TYPES.SINGLE_COLUMN:
    default:
      return <SingleColumnRow {...row} />;
  }
};

export default RowType;
