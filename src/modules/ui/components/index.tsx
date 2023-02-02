import Icon from '_components/icon';

import { useLandingContext } from '_modules/landing/hooks/useContext';
import Overlay from '_modules/overlay/components';
import { useResumeContext } from '_modules/resume/hooks/useContext';

import './style.css';

export default () => {
  const { dispatch: dispatchResume } = useResumeContext();
  const { dispatch: dispatchLanding } = useLandingContext();

  return (
    <>
      <div className="ui-header">
        <div
          className="ui-title"
          onClick={() => dispatchLanding({ type: 'reset' })}
        >
          Hugo Pasquier —
        </div>
        <div
          className="ui-info"
          onClick={() => dispatchResume({ type: 'openResume' })}
        >
          Voir mon CV
        </div>
      </div>
      <Overlay />
      <div className="ui-footer">
        <div className="ui-networks">
          <a
            className="ui-network"
            href="https://www.linkedin.com/in/hugo-pasquier-7b6353202/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon iconName="linkedin" size={32} color="#fff" />
            <p className="ui-network-name">Hugo Pasquier</p>
          </a>

          <a
            className="ui-network"
            href="https://www.github.com/hugopasquier"
            target="_blank"
            rel="noreferrer"
          >
            <Icon iconName="github" size={30} color="#fff" />
            <p className="ui-network-name">hugopasquier</p>
          </a>
        </div>
      </div>
    </>
  );
};
