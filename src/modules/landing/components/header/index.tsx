import Reveal from '_components/reveal';

import { useResumeContext } from '_modules/resume/hooks/useContext';

import './style.css';

export default () => {
  const { dispatch: dispatchResume } = useResumeContext();
  return (
    <section className="landing-header">
      <Reveal
        className="ui-title"
        type="fadeInLeft"
        threshold={0}
        delay={700}
      >
        Hugo Pasquier —
      </Reveal>
      <Reveal
        className="ui-info"
        type="fadeInRight"
        threshold={0}
        delay={700}
        onClick={() => dispatchResume({ type: 'openResume' })}
      >
        About me
      </Reveal>
    </section>
  );
};
