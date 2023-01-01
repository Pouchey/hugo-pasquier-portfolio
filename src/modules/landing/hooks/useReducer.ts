import React from 'react';

import { LandingActionType, LandingState, DefaultLandingState } from '_modules/landing/types';

const initialArgs = DefaultLandingState;

const LandingReducer = (state: LandingState, { type }: LandingActionType) => {
  switch (type) {
    case 'loaded':
      return { ...state, loading: false };
    case 'reset':
      return initialArgs;
    default:
      return state;
  }
};

export default () => React.useReducer(LandingReducer, initialArgs);
