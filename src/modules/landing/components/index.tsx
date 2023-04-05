import Reveal from '_components/reveal';

import { useLandingContext } from '../hooks/useContext';

import Background from './background';
import './style.css';
import Title from './title';

export default () => {
  const { state, dispatch } = useLandingContext();

  const handleExplore = () => {
    dispatch({ type: 'hide' });
  };

  return (
    <div id="landing" className={state.visible ? '' : 'hide'}>
      <div className="landing__container">
        <Background />
        <div className="landing__content">
          <Title />
          <Reveal type="zoomIn" duration={500} delay={700}>
            <button className="landing__button" onClick={handleExplore}>
              Explorer
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
