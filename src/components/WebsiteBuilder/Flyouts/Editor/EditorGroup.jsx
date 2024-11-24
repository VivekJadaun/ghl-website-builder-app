/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react'
import { useWebsiteBuilderContext } from '../../../../contexts/WebsiteBuilderContext';
import { ELEMENT_TYPES } from '../../../../constants/constants';
import HeadlineEditor from './HeadlineEditor';
import ImageEditor from './ImageEditor';
import ParagraphEditor from './ParagraphEditor';
import { useElementContext } from '../../../../contexts/ElementContext';

const EditorType = ({ type, element }) => {
  const { closeEditorFlyout } = useWebsiteBuilderContext();
  const { editElement } = useElementContext();
  const editText = ({text}) => {
    editElement({
      ...element,
      data: { text },
    });
    closeEditorFlyout();
  };
  const editImg = ({src, height = 100, width = 100, alt = ""}) => {
    editElement({
      ...element,
      data: { src, height, width, alt },
    });
    closeEditorFlyout();
  };

  switch (type) {
    case ELEMENT_TYPES.HEADLINE:
      return <HeadlineEditor {...element} onSubmit={editText} />;
    case ELEMENT_TYPES.IMAGE:
      return <ImageEditor {...element} onSubmit={editImg} />;
    case ELEMENT_TYPES.PARAGRAPH:
      return <ParagraphEditor {...element} onSubmit={editText} />;
    default:
      return <>This input type is not supported yet.</>;
  }
};

const EditorGroup = () => {
  const { editorFlyoutVisibility: isOpen, closeEditorFlyout } = useWebsiteBuilderContext();
  const { activeElementId, elements } = useElementContext();
  const element = useMemo(() => elements.find(el => el.id === activeElementId), [activeElementId, elements]);
  const type = useMemo(() => element?.type ?? "", [element?.type]);
  
  return (
    <section className={`hl_page-creator--sections-group ${isOpen ? "active" : ""}`} >
      <a className="close-group" onClick={closeEditorFlyout}>
        <i className="icon icon-close"></i>
      </a>
      <div className="hl_editor-group">
        <div className="tab-content" id="hl_editor-group-tab">
          <div
            className={`tab-pane fade ${isOpen ? "active show" : ""}`}
            id="add-editor"
            role="tabpanel"
            aria-labelledby="add-editor-tab"
          >
            <div className="add-editor">
              <h2>Editor</h2>
              <div className="add-editor-body">
                <div className="editor-cards">
                  {element && <EditorType type={type} element={element} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorGroup;