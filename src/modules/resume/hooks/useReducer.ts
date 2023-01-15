import React from 'react';

import {
  ResumeActionType,
  ResumeState,
  DefaultResumeState,
} from '_modules/resume/types';

const initialArgs = DefaultResumeState;

const ResumeReducer = (state: ResumeState, { type }: ResumeActionType) => {
  switch (type) {
    case 'openResume':
      return { ...state, isResumeOpened: true };
    case 'closeResume':
      return { ...state, isResumeOpened: false };
  }
};

export default () => React.useReducer(ResumeReducer, initialArgs);
