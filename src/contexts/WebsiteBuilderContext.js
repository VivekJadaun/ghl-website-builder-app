import React, { useMemo, useState } from "react";

const WebsiteBuilderContext = React.createContext({});

const WebsiteBuilderProvider = ({ children }) => {
  const [sectionFlyoutVisibility, setSectionFlyoutVisibility] = useState(false);
  const [columnFlyoutVisibility, setColumnFlyoutVisibility] = useState(false);
  const [elementFlyoutVisibility, setElementFlyoutVisibility] = useState(false);
  const [rowFlyoutVisibility, setRowFlyoutVisibility] = useState(false);
  const [editorFlyoutVisibility, setEditorFlyoutVisibility] = useState(false);

  const closeSectionsFlyout = () => setSectionFlyoutVisibility(false);
  const openSectionsFlyout = () => setSectionFlyoutVisibility(true);

  const closeColumnsFlyout = () => setColumnFlyoutVisibility(false);
  const openColumnsFlyout = () => setColumnFlyoutVisibility(true);

  const closeElementsFlyout = () => setElementFlyoutVisibility(false);
  const openElementsFlyout = () => setElementFlyoutVisibility(true);

  const closeRowsFlyout = () => setRowFlyoutVisibility(false);
  const openRowsFlyout = () => setRowFlyoutVisibility(true);

  const closeEditorFlyout = () => setEditorFlyoutVisibility(false);
  const openEditorFlyout = () => setEditorFlyoutVisibility(true);

  const memoizedContextValues = useMemo(
    () => ({
      sectionFlyoutVisibility,
      closeSectionsFlyout,
      openSectionsFlyout,
      columnFlyoutVisibility,
      closeColumnsFlyout,
      openColumnsFlyout,
      elementFlyoutVisibility,
      closeElementsFlyout,
      openElementsFlyout,
      rowFlyoutVisibility,
      closeRowsFlyout,
      openRowsFlyout,
      editorFlyoutVisibility,
      closeEditorFlyout,
      openEditorFlyout,
    }),
    [columnFlyoutVisibility, editorFlyoutVisibility, elementFlyoutVisibility, rowFlyoutVisibility, sectionFlyoutVisibility]
  );

  return (
    <WebsiteBuilderContext.Provider value={memoizedContextValues}>
      {children}
    </WebsiteBuilderContext.Provider>
  );
};

const useWebsiteBuilderContext = () => {
  const context = React.useContext(WebsiteBuilderContext);
  if (context === undefined) {
    throw new Error("useWebsiteBuilderContext must be used within WebsiteBuilderContext");
  }
  return context;
};

export { WebsiteBuilderContext, WebsiteBuilderProvider, useWebsiteBuilderContext };
