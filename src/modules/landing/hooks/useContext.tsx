import React from 'react';

import { LandingContextInterface, DefaultLandingContext } from '_modules/landing/types';

import useLandingReducer from './useReducer';

const LandingContext =
  React.createContext<LandingContextInterface>(DefaultLandingContext);
LandingContext.displayName = 'Landing';

export const useLandingContext = () => React.useContext(LandingContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const LandingProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useLandingReducer();

  const value = { state, dispatch };

  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>;
};
