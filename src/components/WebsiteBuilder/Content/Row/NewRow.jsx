import React, { useCallback } from 'react'
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';
import { useSectionContext } from '../../../../contexts/SectionContext';

const NewRow = ({ sectionId }) => {
  const { openRowsFlyout } = useWebsiteBuilderContext();
  const { setActiveSectionId } = useSectionContext();

  const onClick = useCallback(
    () => {
      setActiveSectionId(sectionId);
      openRowsFlyout();
    },
    [openRowsFlyout, sectionId, setActiveSectionId],
  )
  
  return (
    <div href="#" className="new-row-blank" onClick={onClick}>
      <span className="btn btn-light5 btn-slim">Add New Row</span>
    </div>
  );
};

export default NewRow;