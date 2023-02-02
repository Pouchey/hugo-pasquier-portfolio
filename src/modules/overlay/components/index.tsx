import { useOverlayContext } from '_modules/overlay/hooks/useContext';

import Modal from './modal';
import './style.css';

export default () => {
  const { state, dispatch } = useOverlayContext();

  const handleClick = () => {
    dispatch({
      type: 'setSelectedObject',
      payload: {
        id: state.id,
        active: true,
      },
    });
  };

  const handleClose = () => {
    dispatch({
      type: 'setSelectedObject',
      payload: {
        id: state.id,
        active: false,
      },
    });
  };

  return (
    <>
      <div
        className={`
          overlay-open 
          ${state.id && !state.active ? 'active' : ''} 
          ignore-onclickoutside
        `}
      >
        <span className="overlay-open-line" />
        <div className="overlay-open-button" onClick={handleClick}>
          <div className="overlay-open-button-content">more</div>
        </div>
        <span className="overlay-open-line" />
      </div>
      <Modal
        projectId={state.id || null}
        isOpen={state.active}
        handleClose={handleClose}
      />
    </>
  );
};
