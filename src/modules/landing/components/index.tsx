import { useRef, useEffect } from 'react';

import SmoothScroll from '_components/scroll-container';

import { useLandingContext } from '../hooks/useContext';

import Explore from './explore';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Projects from './projects';
import './style.css';

export default () => {
  const { state } = useLandingContext();
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (state.loading) {
      ref.current?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [state.loading]);

  return (
    <div id="landing" className={state.loading ? 'loading' : 'loaded'}>
      <SmoothScroll ref={ref}>
        <Header />
        <Home />
        <Projects />
        <Explore>
          <Footer />
        </Explore>
      </SmoothScroll>
    </div>
  );
};
