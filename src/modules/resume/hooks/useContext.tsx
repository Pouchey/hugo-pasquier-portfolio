import React from 'react';

import {
  ResumeContextInterface,
  DefaultResumeContext,
} from '_modules/resume/types';

import useResumeReducer from './useReducer';

const ResumeContext =
  React.createContext<ResumeContextInterface>(DefaultResumeContext);
ResumeContext.displayName = 'Resume';

export const useResumeContext = () => React.useContext(ResumeContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const ResumeProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useResumeReducer();
  const value = { state, dispatch };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
