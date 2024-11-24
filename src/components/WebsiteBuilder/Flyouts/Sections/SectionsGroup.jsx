/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSectionContext } from '../../../../contexts/SectionContext';
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';

const SectionsGroup = () => {
  const { sectionFlyoutVisibility: isOpen, closeSectionsFlyout } = useWebsiteBuilderContext();
  const { addSection } = useSectionContext();

  const addFullWidthSection = () => addSection(1);
  const addWideSection = () => addSection(2);
  const addMediumSection = () => addSection(3);
  const addSmallSection = () => addSection(4);
  return (
    <section className={`hl_page-creator--sections-group ${isOpen ? "active" : ""}`} >
      <a
        href="#"
        className="close-group"
        id="close-section-group"
        onClick={closeSectionsFlyout}
      >
        <i className="icon icon-close"></i>
      </a>
      <div className="hl_section-group">
        <div className="tab-content" id="hl_section-group-tab">
          <div
            className={`tab-pane fade ${isOpen ? "active show" : ""}`}
            id="add-section"
            role="tabpanel"
            aria-labelledby="add-section-tab"
          >
            <div className="add-section">
              <h2>Add Sections</h2>
              <div className="add-section-body">
                <div className="section-cards">
                  <div className="section-card" onClick={addFullWidthSection}>
                    <div className="icon">
                      <i className="far fa-square"></i>
                    </div>
                    <h5>Full Width</h5>
                  </div>
                  <div className="section-card" onClick={addWideSection}>
                    <div className="icon">
                      <i className="far fa-square"></i>
                    </div>
                    <h5>Wide</h5>
                  </div>
                  <div className="section-card" onClick={addMediumSection}>
                    <div className="icon">
                      <i className="far fa-square"></i>
                    </div>
                    <h5>Medium</h5>
                  </div>
                  <div className="section-card" onClick={addSmallSection}>
                    <div className="icon">
                      <i className="far fa-square"></i>
                    </div>
                    <h5>Small</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="manage-sections"
            role="tabpanel"
            aria-labelledby="manage-sections-tab"
          >
            <div className="manage-sections">
              <h2>Manage Sections</h2>
              <div className="sections-section-group-wrap">
                <div className="sections-section-group">
                  <h3>All Sections</h3>
                  <ul className="sections">
                    <li>
                      <h4>Section</h4>
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
                      <h4>Section</h4>
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
                      <h4>Section</h4>
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
                      <h4>Section</h4>
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
                      <h4>Section</h4>
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

export default SectionsGroup;