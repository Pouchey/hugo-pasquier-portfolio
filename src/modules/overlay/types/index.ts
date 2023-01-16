import React from 'react';

export interface OverlayState {
  id: string | null;
}
export const DefaultOverlayState = {
  id: null,
};

export type OverlayActionType = {
  type: 'setSelectedObject' | 'reset';
  payload: OverlayState ;
};

export interface OverlayContextInterface {
  state: OverlayState;
  dispatch: React.Dispatch<OverlayActionType>;
}
export const DefaultOverlayContext = {
  state: DefaultOverlayState,
  dispatch: () => undefined,
};
