import { useResumeContext } from '_modules/resume/hooks/useContext';

import './style.css';

export default () => {
  const { state, dispatch } = useResumeContext();

  return (
    <div id="resume" className={state.isResumeOpened ? 'opened' : 'closed'}>
      <h1 onClick={() => dispatch({ type: 'closeResume' })}>Resume</h1>
    </div>
  );
};
