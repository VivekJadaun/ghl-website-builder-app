import React, { useCallback } from 'react'
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';

const Medium = ({ id, position }) => {
  const {
    openSectionsFlyout,
    moveSectionUp,
    moveSectionDown,
    deleteSection,
    duplicateSection,
  } = useWebsiteBuilderContext();

  const moveUp = useCallback(() => moveSectionUp(position), [moveSectionUp, position]);
  const moveDown = useCallback(() => moveSectionDown(position), [moveSectionDown, position]);
  const onDelete = useCallback(() => deleteSection(id), [deleteSection, id]);
  const onClone = useCallback(() => duplicateSection(id), [duplicateSection, id]);

  return (
    <section
      className="hl_page-creator--section"
      id={`section-${id}`}
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
      <span
        className="add-new-section"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Section"
        onClick={openSectionsFlyout}
      >
        <i className="icon icon-plus"></i>
      </span>
      <div className="hl_page-creator--row">
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
              <h3>Heading Text Goes Here</h3>
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
            <div className="element-container">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus sint at cum ratione, itaque quas assumenda consequatur,
                exercitationem ipsa necessitatibus, eaque nemo aliquid quasi.
                Doloremque dolor pariatur ea quod distinctio?
              </p>
            </div>
          </div>
        </div>
        <div className="hl_page-creator--column">
          <div href="#" className="new-element-blank">
            <span className="btn btn-light6 btn-slim">Add New Element</span>
          </div>
        </div>
        <div className="hl_page-creator--column">
          <div href="#" className="new-element-blank">
            <span className="btn btn-light6 btn-slim">Add New Element</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medium;