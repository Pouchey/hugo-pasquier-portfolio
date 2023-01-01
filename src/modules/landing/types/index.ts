export interface LandingState {
  loading: boolean;
}
export const DefaultLandingState = {
  loading: true,
};

export type LandingActionType = {
  type: 'loaded' ;
};

export interface LandingContextInterface {
  state: LandingState;
  dispatch: React.Dispatch<LandingActionType>;
}
export const DefaultLandingContext = {
  state: DefaultLandingState,
  dispatch: () => undefined,
};
