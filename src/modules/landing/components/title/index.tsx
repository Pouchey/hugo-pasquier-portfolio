import Reveal from '_components/reveal';

import './style.css';

export default () => {
  return (
    <Reveal
      type="fadeIn"
      threshold={0.5}
      duration={1200}
      delay={300}
      className="landing__title"
    >
      <h1>Bienvenue sur mon</h1>
      <div className="landing__title__highlight">
        <h2>
          <span>Portfolio</span>
          <span>Portfolio</span>
        </h2>
      </div>
    </Reveal>
  );
};
