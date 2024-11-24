/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ElementsGroup = () => {
  return (
    <section className="hl_page-creator--element-group">
      <a href="#" className="close-group" id="close-element-group">
        <i className="icon icon-close"></i>
      </a>
      <div className="hl_element-group">
        <div className="tab-content" id="hl_element-group-tab">
          <div
            className="tab-pane fade"
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
                <div className="element-group">
                  <h4>Text</h4>
                  <div className="element-cards">
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-heading"></i>
                      </div>
                      <h5>Headline</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-font"></i>
                      </div>
                      <h5>Sub-headline</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-paragraph"></i>
                      </div>
                      <h5>Paragraph</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-list"></i>
                      </div>
                      <h5>Bullet List</h5>
                    </div>
                  </div>
                </div>
                <div className="element-group">
                  <h4>Media</h4>
                  <div className="element-cards">
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-image"></i>
                      </div>
                      <h5>Image</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-images"></i>
                      </div>
                      <h5>Image Popup</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-play-circle"></i>
                      </div>
                      <h5>Video</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="far fa-play-circle"></i>
                      </div>
                      <h5>Video popup</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-volume-up"></i>
                      </div>
                      <h5>Audio player</h5>
                    </div>
                  </div>
                </div>
                <div className="element-group">
                  <h4>Form</h4>
                  <div className="element-cards">
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-stop"></i>
                      </div>
                      <h5>Button</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fab fa-facebook-f"></i>
                      </div>
                      <h5>Facebook Option</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="far fa-square"></i>
                      </div>
                      <h5>Input</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="far fa-hand-pointer"></i>
                      </div>
                      <h5>Select Box</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-comment-alt"></i>
                      </div>
                      <h5>Text Area</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-check-square"></i>
                      </div>
                      <h5>Checkbox Headline</h5>
                    </div>
                  </div>
                </div>
                <div className="element-group">
                  <h4>Advance Form</h4>
                  <div className="element-cards">
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-sms"></i>
                      </div>
                      <h5>SMS Sign up</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-file-invoice"></i>
                      </div>
                      <h5>Billing Add.</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-file-invoice"></i>
                      </div>
                      <h5>Shipping Add.</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-poll-h"></i>
                      </div>
                      <h5>Survey</h5>
                    </div>
                  </div>
                </div>
                <div className="element-group">
                  <h4>Content Blocks</h4>
                  <div className="element-cards">
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-circle"></i>
                      </div>
                      <h5>Icon</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-file-image"></i>
                      </div>
                      <h5>Img Feature</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-link"></i>
                      </div>
                      <h5>Navigation</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="far fa-question-circle"></i>
                      </div>
                      <h5>FAQ</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="far fa-window-minimize"></i>
                      </div>
                      <h5>Divider</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-window-minimize"></i>
                      </div>
                      <h5>Progress bar</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-list"></i>
                      </div>
                      <h5>Image List</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-table"></i>
                      </div>
                      <h5>Pricing Table</h5>
                    </div>
                  </div>
                </div>
                <div className="element-group">
                  <h4>Countdown</h4>
                  <div className="element-cards">
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-hourglass-start"></i>
                      </div>
                      <h5>Countdown</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="far fa-clock"></i>
                      </div>
                      <h5>Minute Timer</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <h5>Day Timer</h5>
                    </div>
                  </div>
                </div>
                <div className="element-group">
                  <h4>Misc Elements</h4>
                  <div className="element-cards">
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-share-alt-square"></i>
                      </div>
                      <h5>Social Share</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-bell"></i>
                      </div>
                      <h5>Privacy Notice</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-comments"></i>
                      </div>
                      <h5>FB Comments</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-align-center"></i>
                      </div>
                      <h5>Text Block</h5>
                    </div>
                    <div className="element-card">
                      <div className="icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <h5>Custom JS/HTML</h5>
                    </div>
                  </div>
                </div>
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