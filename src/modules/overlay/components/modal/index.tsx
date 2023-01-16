import useOnclickOutside from 'react-cool-onclickoutside';

import projectsDetailled from '_assets/projectsDetailled';
import Icon from '_components/icon';

import { getProject } from '_utils/projects';

import './style.css';

interface ModalProps {
  projectId: string | null;
  isOpen: boolean;
  handleClose: () => void;
}

export default ({ projectId, isOpen, handleClose }: ModalProps) => {
  const ref = useOnclickOutside(() => {
    handleClose();
  });

  const project = getProject('project', projectsDetailled);

  return (
    <div className={`overlay-modal ${isOpen ? 'active' : ''}`}>
      <div ref={ref} className="overlay-modal-container">
        <div className="overlay-modal-header">
          <div className="overlay-modal-title">{project?.name}</div>
        </div>

        <div className="overlay-modal-content">
          <img
            className="overlay-modal-image"
            src={project?.image}
            alt="project"
          />
          <div className="overlay-modal-description">
            {project?.description}
          </div>
        </div>
        <div className="overlay-modal-footer">
          <div className="overlay-modal-github">
            <a
              className="ui-network"
              href="https://www.github.com/hugopasquier"
              target="_blank"
              rel="noreferrer"
            >
              <Icon iconName="github" size={32} color="#fff"/>
              <p className="ui-network-name">Check on github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
