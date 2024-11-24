/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useWebsiteBuilderContext } from "../../../../contexts/WebsiteBuilderContext";
import { COLUMN_OPTIONS } from "../../../../constants/constants";
import { useRowContext } from "../../../../contexts/RowContext";

const ColumnOptionCard = ({ label, onClick, enabled = false }) => {
  return (
    <div
      className={`row-card ${!enabled ? "cursor-not-allowed opacity-50" : ""}`}
      onClick={enabled ? onClick : undefined}
      title={!enabled ? "Coming soon" : ""}
    >
      <div className="icon">
        <i className="fas fa-columns"></i>
      </div>
      <h5>{label}</h5>
    </div>
  );
};

const RowsGroup = () => {
  const { rowFlyoutVisibility: isOpen, closeRowsFlyout } = useWebsiteBuilderContext();
  const { addRow } = useRowContext();

  console.log(addRow);
  
  const onAdd = (columns) => addRow(columns);
  
  return (
    <section
      className={`hl_page-creator--rows-group ${isOpen ? "active" : ""}`}
    >
      <a
        href="#"
        className="close-group"
        id="close-row-group"
        onClick={closeRowsFlyout}
      >
        <i className="icon icon-close"></i>
      </a>
      <div className="hl_row-group">
        <div className="tab-content" id="hl_row-group-tab">
          <div
            className={`tab-pane fade ${isOpen ? "active show" : ""}`}
            id="add-row"
            role="tabpanel"
            aria-labelledby="add-row-tab"
          >
            <div className="add-row">
              <h2>Add Row</h2>
              <div className="add-row-body">
                <div className="row-cards">
                  {COLUMN_OPTIONS.map((option) => (
                    <ColumnOptionCard
                      {...option}
                      onClick={() => onAdd(option.type)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="manage-rows"
            role="tabpanel"
            aria-labelledby="manage-rows-tab"
          >
            <div className="manage-rows">
              <h2>Manage Rows</h2>
              <div className="rows-section-group-wrap">
                <div className="rows-section-group">
                  <h3>Section</h3>
                  <ul className="rows">
                    <li>
                      <h4>2 Column Row</h4>
                      <div className="actions">
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="fas fa-arrows-alt-v"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-eye"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-copy"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rows-section-group">
                  <h3>Section</h3>
                  <ul className="rows">
                    <li>
                      <h4>1 Column Row</h4>
                      <div className="actions">
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="fas fa-arrows-alt-v"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-eye"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-copy"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <h4>1 Column Row</h4>
                      <div className="actions">
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="fas fa-arrows-alt-v"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-eye"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-copy"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rows-section-group">
                  <h3>Section</h3>
                  <ul className="rows">
                    <li>
                      <h4>2 Column Row</h4>
                      <div className="actions">
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="fas fa-arrows-alt-v"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-eye"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-copy"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rows-section-group">
                  <h3>Section</h3>
                  <ul className="rows">
                    <li>
                      <h4>1 Column Row</h4>
                      <div className="actions">
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="fas fa-arrows-alt-v"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-eye"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-copy"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <h4>1 Column Row</h4>
                      <div className="actions">
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="fas fa-arrows-alt-v"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-eye"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-copy"></i>
                        </a>
                        <a href="#" className="btn btn-square-sm btn-light4">
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RowsGroup;
