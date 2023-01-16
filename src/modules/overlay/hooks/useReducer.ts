import React from 'react';

import {
  OverlayActionType,
  OverlayState,
  DefaultOverlayState,
} from '_modules/overlay/types';

const initialArgs = DefaultOverlayState;

const OverlayReducer = (
  state: OverlayState,
  { type, payload }: OverlayActionType
) => {
  switch (type) {
    case 'setSelectedObject':
      return { ...state, id: payload.id };
    case 'reset':
      return initialArgs;
    default:
      return state;
  }
};

export default () => React.useReducer(OverlayReducer, initialArgs);
