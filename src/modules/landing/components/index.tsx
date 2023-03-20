// import SmoothScroll from '_components/scroll-container';
import { useLandingContext } from '../hooks/useContext';

import Explore from './explore';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Projects from './projects';
import './style.css';

export default () => {
  const { state } = useLandingContext();
  return (
    <div id="landing" className={state.loading ? 'loading' : 'loaded'}>
      <Header />
      <Home />
      <Projects />
      <Explore>
        <Footer />
      </Explore>
    </div>
  );
};
