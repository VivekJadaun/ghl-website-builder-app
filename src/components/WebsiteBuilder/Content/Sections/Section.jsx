import React, { useCallback, useMemo } from "react";
import { useSectionContext } from "../../../../contexts/SectionContext";
import { useWebsiteBuilderContext } from "../../../../contexts/WebsiteBuilderContext";
import { useRowContext } from "../../../../contexts/RowContext";
import NewRow from "../Row/NewRow";
import { SECTION_TYPES } from "../../../../constants/constants";
import Row from "../Row/Row";

const FULLWIDTH_SECTION_STYLE = {
  backgroundColor: "#f4f4f4",
  padding: "80px 0",
  textAlign: "center",
};

const Section = ({ id, position, type }) => {
  const { openSectionsFlyout } = useWebsiteBuilderContext();
  const {
    setActiveSectionId,
    moveSectionUp,
    moveSectionDown,
    deleteSection,
    duplicateSection,
  } = useSectionContext();
  const { rows } = useRowContext();
  const currentSectionRows = useMemo(
    () => rows.filter((row) => row.parentId === id),
    [id, rows]
  );

  const moveUp = useCallback(
    () => moveSectionUp(position),
    [moveSectionUp, position]
  );
  const moveDown = useCallback(
    () => moveSectionDown(position),
    [moveSectionDown, position]
  );
  const onDelete = useCallback(() => deleteSection(id), [deleteSection, id]);
  const onClone = useCallback(
    () => duplicateSection(id),
    [duplicateSection, id]
  );

  const onAddSection = useCallback(() => {
    setActiveSectionId(id);
    openSectionsFlyout();
  }, [id, openSectionsFlyout, setActiveSectionId]);

  return (
    <section
      className="hl_page-creator--section"
      id={`section-${id}`}
      style={type === SECTION_TYPES.FULL_WIDTH ? FULLWIDTH_SECTION_STYLE : {}}
    >
      <div className="hl_page-creator--actions">
        <div className="move-actions">
          <span
            data-tooltip="tooltip"
            data-placement="right"
            title="Up"
            onClick={moveUp}
          >
            <i className="icon icon-arrow-up-2"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="right"
            title="Down"
            onClick={moveDown}
          >
            <i className="icon icon-arrow-down-2"></i>
          </span>
        </div>
        <div className="more-actions">
          <span data-tooltip="tooltip" data-placement="left" title="Settings">
            <i className="fas fa-cog"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="left"
            title="Clone"
            onClick={onClone}
          >
            <i className="far fa-eye"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="left" title="Save">
            <i className="far fa-copy"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="left"
            title="Delete"
            onClick={onDelete}
          >
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
      {id}
      <span
        className="add-new-section"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Section"
        onClick={onAddSection}
      >
        <i className="icon icon-plus"></i>
      </span>

      {!!currentSectionRows.length &&
        currentSectionRows.map((row) => <Row key={row.id} {...row} />)}

      {!currentSectionRows.length && <NewRow sectionId={id} />}
    </section>
  );
};

export default Section;
