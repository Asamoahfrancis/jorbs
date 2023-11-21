"use client";

import React, { useState } from "react";
import { ReactNode } from "react";

export const basicContext = React.createContext({
  isValid: false,
});

export const BasicContextProvider = ({ children }: { children: ReactNode }) => {
  const [isValid, setisvalid] = useState(false);

  return (
    <basicContext.Provider value={{ isValid: isValid }}>
      {children}
    </basicContext.Provider>
  );
};
