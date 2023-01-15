import React from 'react';

export interface ResumeState {
  isResumeOpened: boolean;
}
export const DefaultResumeState = {
  isResumeOpened: false,
};

export type ResumeActionType = {
  type: 'openResume' | 'closeResume';
};

export interface ResumeContextInterface {
  state: ResumeState;
  dispatch: React.Dispatch<ResumeActionType>;
}
export const DefaultResumeContext = {
  state: DefaultResumeState,
  dispatch: () => undefined,
};
