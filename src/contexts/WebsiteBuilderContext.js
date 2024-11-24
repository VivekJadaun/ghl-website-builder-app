import React, { useMemo, useState } from "react";

const WebsiteBuilderContext = React.createContext({});

const WebsiteBuilderProvider = ({ children }) => {
  const [sectionFlyoutVisibility, setSectionFlyoutVisibility] = useState(false);
  const [columnFlyoutVisibility, setColumnFlyoutVisibility] = useState(false);
  const [elementFlyoutVisibility, setElementFlyoutVisibility] = useState(false);
  const [rowFlyoutVisibility, setRowFlyoutVisibility] = useState(false);

  const closeSectionsFlyout = () => setSectionFlyoutVisibility(false);
  const openSectionsFlyout = () => setSectionFlyoutVisibility(true);
  const toggleSectionsFlyout = () =>
    setSectionFlyoutVisibility((currentVisibility) => !currentVisibility);

  const closeColumnsFlyout = () => setColumnFlyoutVisibility(false);
  const openColumnsFlyout = () => setColumnFlyoutVisibility(true);
  const toggleColumnsFlyout = () =>
    setColumnFlyoutVisibility((currentVisibility) => !currentVisibility);

  const closeElementsFlyout = () => setElementFlyoutVisibility(false);
  const openElementsFlyout = () => setElementFlyoutVisibility(true);
  const toggleElementsFlyout = () =>
    setElementFlyoutVisibility((currentVisibility) => !currentVisibility);

  const closeRowsFlyout = () => setRowFlyoutVisibility(false);
  const openRowsFlyout = () => setRowFlyoutVisibility(true);
  const toggleRowsFlyout = () =>
    setRowFlyoutVisibility((currentVisibility) => !currentVisibility);

  const memoizedContextValues = useMemo(
    () => ({
      sectionFlyoutVisibility,
      closeSectionsFlyout,
      openSectionsFlyout,
      toggleSectionsFlyout,
      columnFlyoutVisibility,
      closeColumnsFlyout,
      openColumnsFlyout,
      toggleColumnsFlyout,
      elementFlyoutVisibility,
      closeElementsFlyout,
      openElementsFlyout,
      toggleElementsFlyout,
      rowFlyoutVisibility,
      closeRowsFlyout,
      openRowsFlyout,
      toggleRowsFlyout,
    }),
    [columnFlyoutVisibility, elementFlyoutVisibility, rowFlyoutVisibility, sectionFlyoutVisibility]
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
