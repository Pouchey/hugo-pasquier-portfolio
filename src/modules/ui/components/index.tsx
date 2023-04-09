import Icon from '_components/icon';
import Reveal from '_components/reveal';

import { useLandingContext } from '_modules/landing/hooks/useContext';
import Overlay from '_modules/overlay/components';
import { useResumeContext } from '_modules/resume/hooks/useContext';

import './style.css';

export default () => {
  const { dispatch: dispatchResume } = useResumeContext();
  const { dispatch: dispatchLanding } = useLandingContext();

  return (
    <>
      <div className="ui__header">
        <Reveal
          className="ui__title"
          type="fadeInLeft"
          threshold={0}
          delay={600}
          onClick={() => dispatchLanding({ type: 'show' })}
        >
          Hugo Pasquier —
        </Reveal>
        <Reveal
          className="ui__info"
          type="fadeInRight"
          threshold={0}
          delay={600}
          onClick={() => dispatchResume({ type: 'openResume' })}
        >
          Voir mon CV
        </Reveal>
      </div>
      <Overlay />
      <div className="ui__footer">
        <Reveal
          className="ui__networks"
          type="fadeInLeft"
          threshold={0}
          delay={600}
        >
          <a
            className="ui__network"
            href="https://www.linkedin.com/in/hugo-pasquier-7b6353202/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon iconName="linkedin" size={32} color="#fff" />
            <p className="ui__network__name">Hugo Pasquier</p>
          </a>

          <a
            className="ui__network"
            href="https://www.github.com/hugopasquier"
            target="_blank"
            rel="noreferrer"
          >
            <Icon iconName="github" size={30} color="#fff" />
            <p className="ui__network__name">hugopasquier</p>
          </a>
        </Reveal>
      </div>
    </>
  );
};
