import { useState } from 'react';

import { useOverlayContext } from '_modules/overlay/hooks/useContext';

import Modal from './modal';
import './style.css';

export default () => {
  const { state } = useOverlayContext();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`
          overlay-open ${state.id && !isOpen ? 'active' : ''}
        `}
      >
        <span className="overlay-open-line" />
        <div className="overlay-open-button">
          <div className="overlay-open-button-content" onClick={handleClick}>
            more
          </div>
        </div>
        <span className="overlay-open-line" />
      </div>
      <Modal
        projectId={state.id || null}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </>
  );
};
