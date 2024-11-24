import React, { useCallback } from 'react'
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';
import { useRowContext } from '../../../../contexts/RowContext';

const NewElement = ({ rowId, column }) => {
  const { openElementsFlyout } = useWebsiteBuilderContext();
  const { setActiveRowId, setActiveColumn } = useRowContext();

  const onClick = useCallback(() => {
    console.log(column);
    setActiveRowId(rowId);
    setActiveColumn(column);
    openElementsFlyout();
  }, [column, openElementsFlyout, rowId, setActiveColumn, setActiveRowId]);

  return (
    <div href="#" className="new-element-blank" onClick={onClick}>
      <span className="btn btn-light6 btn-slim">Add New Element</span>
    </div>
  );
};

export default NewElement