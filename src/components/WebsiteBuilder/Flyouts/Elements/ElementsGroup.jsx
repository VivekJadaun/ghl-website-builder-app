/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from 'react'
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';
import { useRowContext } from '../../../../contexts/RowContext';
import { useElementContext } from '../../../../contexts/ElementContext';
import TextElements from './TextElements';
import MediaElements from './MediaElements';
import MiscElements from './MiscElements';
import CountdownElements from './CountdownElements';
import ContentBlockElements from './ContentBlockElements';
import AdvanceFormElements from './AdvanceFormElements';
import FormElements from './FormElements';

const ElementsGroup = () => {
  const { elementFlyoutVisibility: isOpen, closeElementsFlyout } =
    useWebsiteBuilderContext();
  const { activeRowId, activeColumn } = useRowContext();
  const { addElement } = useElementContext();
  console.log({ activeColumn });
  
  const onAdd = useCallback(
    (type) => addElement(type, activeColumn, activeRowId),
    [activeColumn, activeRowId, addElement]
  );
  ;
  
  return (
    <section
      className={`hl_page-creator--element-group ${isOpen ? "active" : ""}`}
    >
      <a
        href="#"
        className="close-group"
        id="close-element-group"
        onClick={closeElementsFlyout}
      >
        <i className="icon icon-close"></i>
      </a>
      <div className="hl_element-group">
        <div className="tab-content" id="hl_element-group-tab">
          <div
            className={`tab-pane fade ${isOpen ? "active show" : ""}`}
            id="add-element"
            role="tabpanel"
            aria-labelledby="add-element-tab"
          >
            <div className="add-element">
              <div className="add-element-menu">
                <ul>
                  <li className="active">
                    <a href="#">All</a>
                  </li>
                  <li>
                    <a href="#">Text</a>
                  </li>
                  <li>
                    <a href="#">Media</a>
                  </li>
                  <li>
                    <a href="#">Form</a>
                  </li>
                  <li>
                    <a href="#">Content</a>
                  </li>
                  <li>
                    <a href="#">Countdown</a>
                  </li>
                  <li>
                    <a href="#">Misc</a>
                  </li>
                </ul>
              </div>
              <div className="add-element-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
                <TextElements onClick={onAdd} />
                <MediaElements onClick={onAdd} />
                <FormElements/>
                <AdvanceFormElements/>
                <ContentBlockElements/>
                <CountdownElements/>
                <MiscElements/>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="manage-elements"
            role="tabpanel"
            aria-labelledby="manage-elements-tab"
          >
            <div className="manage-elements">
              <h2>Manage Elements</h2>
              <div className="elements-section-group-wrap">
                <div className="elements-section-group">
                  <h3>Section {">"} Left Column</h3>
                  <ul className="elements">
                    <li>
                      <h4>Image</h4>
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
                <div className="elements-section-group">
                  <h3>Section {">"} Right Column</h3>
                  <ul className="elements">
                    <li>
                      <h4>Headline</h4>
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
                      <h4>Headline</h4>
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
                      <h4>Input Form</h4>
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
                      <h4>Input Form</h4>
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
                      <h4>Button</h4>
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
                <div className="elements-section-group">
                  <h3>Section {">"} Full Column</h3>
                  <ul className="elements">
                    <li>
                      <h4>Headline</h4>
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
                      <h4>Button</h4>
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
                      <h4>Input</h4>
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
                      <h4>Button</h4>
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
                      <h4>Headline</h4>
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
                <div className="elements-section-group">
                  <h3>Section {">"} Right Column</h3>
                  <ul className="elements">
                    <li>
                      <h4>Headline</h4>
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
                      <h4>Headline</h4>
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
                      <h4>Input Form</h4>
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
                      <h4>Input Form</h4>
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
                      <h4>Button</h4>
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
}

export default ElementsGroup;