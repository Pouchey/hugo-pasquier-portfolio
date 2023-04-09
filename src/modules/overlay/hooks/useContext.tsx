import React from 'react';

import {
  OverlayContextInterface,
  DefaultOverlayContext,
} from '_modules/overlay/types/context';

import useOverlayReducer from './useReducer';

const OverlayContext = React.createContext<OverlayContextInterface>(
  DefaultOverlayContext
);
OverlayContext.displayName = 'Overlay';

export const useOverlayContext = () => React.useContext(OverlayContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const OverlayProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useOverlayReducer();

  const value = { state, dispatch };

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
};
