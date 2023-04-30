import { useResumeContext } from '_modules/resume/hooks/useContext';

import HardSkills from './hard-skills';
import Header from './header';
import InfoCard from './info-card';
import './style.css';

export default () => {
  const { state } = useResumeContext();

  return (
    <div id="resume" className={state.isResumeOpened ? 'opened' : 'closed'}>
      <div className="resume__container">
        <Header />
        <InfoCard />
        <HardSkills />
      </div>
    </div>
  );
};
