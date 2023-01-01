import React from 'react';

import { LandingActionType, LandingState, DefaultLandingState } from '_modules/landing/types';

const initialArgs = DefaultLandingState;

const LandingReducer = (state: LandingState, { type }: LandingActionType) => {
  switch (type) {
    case 'loaded':
      return { ...state, loading: false };
  }
};

export default () => React.useReducer(LandingReducer, initialArgs);
