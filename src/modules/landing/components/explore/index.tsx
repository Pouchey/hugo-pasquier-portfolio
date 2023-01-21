import Reveal from '_components/reveal';

import { useLandingContext } from '_modules/landing/hooks/useContext';

import './style.css';

export default ({children} : {children: React.ReactNode}
  
  ) => {
  const { dispatch: dispatchLanding } = useLandingContext();

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    dispatchLanding({ type: 'loaded' });
  };

  return (
    <section className="landing-explore">
      <Reveal
        className="landing-explore-title"
        type="fadeIn"
        threshold={1}
        delay={700}
        onClick={handleClick}
      >
        Explore my work
      </Reveal>
      {children}
    </section>
  );
};
