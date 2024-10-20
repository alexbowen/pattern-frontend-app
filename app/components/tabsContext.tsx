"use client";

import React, { createContext, useState } from "react";

const useTabsState = () =>
  useState({
    active: parseInt(localStorage.getItem('pattern-radio-style'), 10) || null
  });

  // https://embed.radio.co/Tabs/b84cf70.html

export const TabsContext = createContext<ReturnType<
  typeof useTabsState
> | null>(null);

export const useTabs = () => {
  const cart = React.useContext(TabsContext);
  if (!cart) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return cart;
};

const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const [Tabs, setTabs] = useTabsState();

  return (
    <TabsContext.Provider value={[Tabs, setTabs]}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
