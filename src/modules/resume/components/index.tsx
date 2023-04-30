import { useRef } from 'react';

import Icon from '_components/icon';

import { useResumeContext } from '_modules/resume/hooks/useContext';

import HardSkills from './hard-skills';
import Header from './header';
import InfoCard from './info-card';
import School from './school';
import SoftSkills from './soft-skills';
import './style.css';
import Work from './work';

const GoBackButton = () => {
  const { dispatch } = useResumeContext();

  return (
    <button
      className="resume__go__back__button"
      onClick={() => dispatch({ type: 'closeResume' })}
    >
      <Icon iconName="chevron-left" size={20} color="white" />
      <span>Retour</span>
    </button>
  );
};

export default () => {
  const { state } = useResumeContext();

  const ref = useRef<HTMLDivElement>(null);

  if (state.isResumeOpened) {
    if (ref.current) {
      ref.current.scroll({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div id="resume" className={state.isResumeOpened ? 'opened' : 'closed'}>
      <GoBackButton />
      <div className="resume__container" ref={ref}>
        <Header />
        <InfoCard />
        <HardSkills />
        <SoftSkills />
        <School />
        <Work />
      </div>
    </div>
  );
};
