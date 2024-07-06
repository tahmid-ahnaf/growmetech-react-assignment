import React, { createContext, useContext, useState, ReactNode } from "react";

interface DialogContextProps {
  showDialog: boolean;
  setShowDialog: (value: boolean) => void;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <DialogContext.Provider value={{ showDialog, setShowDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};