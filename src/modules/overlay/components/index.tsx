import { useOverlayContext } from '_modules/overlay/hooks/useContext';

import './style.css';

export default () => {
  const { state } = useOverlayContext();

  if (!state.id) return null;

  return (
    <div id="overlay">
      <div>{state.id}</div>
    </div>
  );
};
