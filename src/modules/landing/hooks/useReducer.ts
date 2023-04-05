import React from 'react';

import {
  LandingActionType,
  LandingState,
  DefaultLandingState,
} from '_modules/landing/types/context';

const initialArgs = DefaultLandingState;

const LandingReducer = (state: LandingState, { type }: LandingActionType) => {
  switch (type) {
    case 'hide':
      return { ...state, visible: false };
    case 'show':
      return initialArgs;
    default:
      return state;
  }
};

export default () => React.useReducer(LandingReducer, initialArgs);
