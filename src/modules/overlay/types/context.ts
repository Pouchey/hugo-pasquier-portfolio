import React from 'react';

export interface OverlayState {
  id: string | null;
  active: boolean;
  landing?: boolean;
}
export const DefaultOverlayState = {
  id: null,
  active: false,
};

export type OverlayActionType = {
  type: 'setSelectedObject' | 'reset';
  payload?: OverlayState;
};

export interface OverlayContextInterface {
  state: OverlayState;
  dispatch: React.Dispatch<OverlayActionType>;
}
export const DefaultOverlayContext = {
  state: DefaultOverlayState,
  dispatch: () => undefined,
};
