import React from 'react';

export interface LandingState {
  visible: boolean;
}
export const DefaultLandingState = {
  visible: true,
};

export type LandingActionType = {
  type: 'hide' | 'show';
};

export interface LandingContextInterface {
  state: LandingState;
  dispatch: React.Dispatch<LandingActionType>;
}
export const DefaultLandingContext = {
  state: DefaultLandingState,
  dispatch: () => undefined,
};
