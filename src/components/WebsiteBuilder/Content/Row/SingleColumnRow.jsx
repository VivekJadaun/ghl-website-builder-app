import React from 'react'
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';
import { useRowContext } from '../../../../contexts/RowContext';

const SingleColumnRow = () => {
  const { openRowsFlyout } = useWebsiteBuilderContext();
  const { moveRowUp, moveRowDown, deleteRow, duplicateRow } = useRowContext();

  return (
    <div className="hl_page-creator--row">
      <div className="hl_page-creator--actions">
        <div className="move-actions">
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Up"
            onClick={moveRowUp}
          >
            <i className="icon icon-arrow-up-2"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Down"
            onClick={moveRowDown}
          >
            <i className="icon icon-arrow-down-2"></i>
          </span>
        </div>
        <div className="more-actions">
          <span data-tooltip="tooltip" data-placement="top" title="Settings">
            <i className="fas fa-cog"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Clone"
            onClick={duplicateRow}
          >
            <i className="far fa-eye"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="top" title="Save">
            <i className="far fa-copy"></i>
          </span>
          <span
            data-tooltip="tooltip"
            data-placement="top"
            title="Delete"
            onClick={deleteRow}
          >
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
      <span
        className="add-new-row"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Row"
        onClick={openRowsFlyout}
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
              <span data-tooltip="tooltip" data-placement="top" title="Delete">
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
              <span data-tooltip="tooltip" data-placement="top" title="Delete">
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
              autem culpa doloremque laudantium in deleniti, corrupti eaque illo
              nam quae. Vel nesciunt, libero ipsa similique ipsum ducimus fuga
              magni. Voluptatum iste pariatur cum doloremque est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleColumnRow;