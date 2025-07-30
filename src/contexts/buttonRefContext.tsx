import React, { createContext, useContext, useRef } from 'react';

const ButtonRefContext = createContext<React.RefObject<HTMLButtonElement | null> | null>(null);

export const ButtonRefProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <ButtonRefContext.Provider value={buttonRef}>{children}</ButtonRefContext.Provider>;
};

export const useButtonRef = () => {
  const ref = useContext(ButtonRefContext);
  if (!ref) throw new Error('useButtonRef must be used within a RefProvider');
  return ref;
};