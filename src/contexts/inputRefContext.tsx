import React, { createContext, useContext, useRef } from 'react';

const InputRefContext = createContext<React.RefObject<HTMLInputElement | null> | null>(null);

export const InputRefProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <InputRefContext.Provider value={inputRef}>{children}</InputRefContext.Provider>;
};

export const useInputRef = () => {
  const ref = useContext(InputRefContext);
  if (!ref) throw new Error('useInputRef must be used within a RefProvider');
  return ref;
};