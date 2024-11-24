import React, { useCallback } from "react";
import { useSectionContext } from "../../../../contexts/SectionContext";
import { useWebsiteBuilderContext } from "../../../../contexts/WebsiteBuilderContext";
import { ColumnProvider } from "../../../../contexts/ColumnContext";
import RowType from "../RowType";
import EmptyRow from "../Row/EmptyRow";
import { useRowContext } from "../../../../contexts/RowContext";

const Wide = ({ id, position }) => {
  const { openSectionsFlyout } = useWebsiteBuilderContext();
  const {
    setActiveSectionId,
    moveSectionUp,
    moveSectionDown,
    deleteSection,
    duplicateSection,
  } = useSectionContext();
  const { rows } = useRowContext();

  const moveUp = useCallback(() => moveSectionUp(position), [moveSectionUp, position]);
  const moveDown = useCallback(() => moveSectionDown(position), [moveSectionDown, position]);
  const onDelete = useCallback(() => deleteSection(id), [deleteSection, id]);
  const onClone = useCallback(() => duplicateSection(id), [duplicateSection, id]);

  const onAddSection = useCallback(() => {
    setActiveSectionId(id);
    openSectionsFlyout();
  }, [id, openSectionsFlyout, setActiveSectionId]);

  return (
    <section
      className="hl_page-creator--section"
      id={`section-${id}`}
      style={{
        backgroundColor: "#f4f4f4",
        padding: "80px 0",
        textAlign: "center",
      }}
    >
      <div className="hl_page-creator--actions" id={`wide-section-no-${id}`}>
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
      <span
        className="add-new-section"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Section"
        onClick={onAddSection}
      >
        <i className="icon icon-plus"></i>
      </span>

      {!!rows.length &&
        rows.map((row) => (
          <ColumnProvider key={row.id}>
            <RowType key={row.id} row={row} />
          </ColumnProvider>
        ))}

      {!rows.length && <EmptyRow />}
      {/* <div className="hl_page-creator--row">
        <div className="hl_page-creator--actions">
          <div className="move-actions">
            <span data-tooltip="tooltip" data-placement="top" title="Up">
              <i className="icon icon-arrow-up-2"></i>
            </span>
            <span data-tooltip="tooltip" data-placement="top" title="Down">
              <i className="icon icon-arrow-down-2"></i>
            </span>
          </div>
          <div className="more-actions">
            <span data-tooltip="tooltip" data-placement="top" title="Settings">
              <i className="fas fa-cog"></i>
            </span>
            <span data-tooltip="tooltip" data-placement="top" title="Clone">
              <i className="far fa-eye"></i>
            </span>
            <span data-tooltip="tooltip" data-placement="top" title="Save">
              <i className="far fa-copy"></i>
            </span>
            <span data-tooltip="tooltip" data-placement="top" title="Delete">
              <i className="far fa-trash-alt"></i>
            </span>
          </div>
        </div>
        <span
          className="add-new-row"
          data-tooltip="tooltip"
          data-placement="bottom"
          title="Add New Row"
        >
          <i className="icon icon-plus"></i>
        </span>
        <div className="hl_page-creator--column">
          <div className="hl_page-creator--element">
            <div className="hl_page-creator--actions">
              <div className="more-actions">
                <span data-tooltip="tooltip" data-placement="top" title="Move">
                  <i className="fas fa-arrows-alt"></i>
                </span>
                <span data-tooltip="tooltip" data-placement="top" title="Clone">
                  <i className="far fa-eye"></i>
                </span>
                <span data-tooltip="tooltip" data-placement="top" title="Save">
                  <i className="far fa-copy"></i>
                </span>
                <span
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Delete"
                >
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
            <span
              className="add-new-element"
              data-tooltip="tooltip"
              data-placement="bottom"
              title="Add New Element"
            >
              <i className="icon icon-plus"></i>
            </span>
            <div className="element-container">
              <h1>Heading Text Goes Here</h1>
            </div>
          </div>
          <div className="hl_page-creator--element">
            <div className="hl_page-creator--actions">
              <div className="more-actions">
                <span data-tooltip="tooltip" data-placement="top" title="Move">
                  <i className="fas fa-arrows-alt"></i>
                </span>
                <span data-tooltip="tooltip" data-placement="top" title="Clone">
                  <i className="far fa-eye"></i>
                </span>
                <span data-tooltip="tooltip" data-placement="top" title="Save">
                  <i className="far fa-copy"></i>
                </span>
                <span
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Delete"
                >
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
            <span
              className="add-new-element"
              data-tooltip="tooltip"
              data-placement="bottom"
              title="Add New Element"
            >
              <i className="icon icon-plus"></i>
            </span>
            <div
              className="element-container"
              style={{
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                architecto quas mollitia voluptates iure consequuntur totam
                numquam quasi quaerat, iste, libero asperiores optio praesentium
                autem culpa doloremque laudantium in deleniti, corrupti eaque
                illo nam quae. Vel nesciunt, libero ipsa similique ipsum ducimus
                fuga magni. Voluptatum iste pariatur cum doloremque est.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Wide;
