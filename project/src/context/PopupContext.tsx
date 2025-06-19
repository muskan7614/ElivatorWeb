import React, { createContext, useContext, useState, useEffect } from 'react';

type PopupContextType = {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // 🔁 Automatically open popup every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      openPopup();
    }, 60000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
