import React from 'react'
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';

const EmptyRow = () => {
  const { openRowsFlyout } = useWebsiteBuilderContext();
  
  return (
    <div href="#" className="new-row-blank" onClick={openRowsFlyout}>
      <span className="btn btn-light5 btn-slim">Add New Row</span>
    </div>
  );
}

export default EmptyRow;