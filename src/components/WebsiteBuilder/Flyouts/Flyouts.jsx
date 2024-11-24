import React from 'react'
import SettingsGroup from "./Settings/SettingsGroup";
import SectionsGroup from "./Sections/SectionsGroup";
import RowsGroup from "./Rows/RowsGroup";
import ColumnsGroup from "./Columns/ColumnsGroup";
import ElementsGroup from "./Elements/ElementsGroup";

const Flyouts = () => {
  return (
    <>
      <SettingsGroup />
      <SectionsGroup />
      <RowsGroup />
      <ColumnsGroup />
      <ElementsGroup />
    </>
  );
}

export default Flyouts