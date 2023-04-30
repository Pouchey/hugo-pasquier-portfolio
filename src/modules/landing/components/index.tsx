import { useRef } from 'react';

import Reveal from '_components/reveal';

import { useLandingContext } from '../hooks/useContext';

import Background from './background';
import Footer from './footer';
import Home from './home';
import Projects from './projects';
import './style.css';
import Title from './title';

export default () => {
  const { state, dispatch } = useLandingContext();

  const handleExplore = () => {
    dispatch({ type: 'hide' });
  };

  const ref = useRef<HTMLDivElement>(null);
  console.log(state.visible);
  if (state.visible) {
    if (ref.current) {
      ref.current.scroll({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div id="landing" className={state.visible ? '' : 'hide'} ref={ref}>
      <div className="landing__container full">
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
      <div className="landing__container">
        <Home />
      </div>
      <div className="landing__container">
        <Projects />
      </div>
      <div className="landing__container full">
        <Reveal type="zoomIn" duration={300}>
          <button className="landing__button" onClick={handleExplore}>
            Explorer
          </button>
        </Reveal>
        <Footer />
      </div>
    </div>
  );
};
