import { animated, useSpring } from 'react-spring';

import { useLandingContext } from '_modules/landing/hooks/useContext';
import { useResumeContext } from '_modules/resume/hooks/useContext';

import './style.css';

export default () => {
  const { dispatch: dispatchResume } = useResumeContext();
  const { dispatch: dispatchLanding } = useLandingContext();

  const fadeInLeft = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 300 },
  });

  const fadeInRight = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 300 },
  });

  return (
    <div id="ui">
      <div className="ui-header">
        <animated.p
          className="ui-title"
          style={fadeInLeft}
          onClick={() => dispatchLanding({ type: 'reset' })}
        >
          Hugo Pasquier —
        </animated.p>
        <animated.span
          className="ui-info"
          style={fadeInRight}
          onClick={() => dispatchResume({ type: 'openResume' })}
        >
          About me
        </animated.span>
      </div>
      <div className="ui-footer">
        <animated.div className="ui-networks" style={fadeInLeft}>
          <a
            className="ui-network"
            href="https://www.linkedin.com/in/hugo-pasquier-7b6353202/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ui-network-icon"
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
              alt="linkedin"
            />
            <p className="ui-network-name">Hugo Pasquier</p>
          </a>

          <a
            className="ui-network"
            href="https://www.github.com/hugopasquier"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ui-network-icon"
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="github"
            />
            <p className="ui-network-name">hugopasquier</p>
          </a>
        </animated.div>
      </div>
    </div>
  );
};
