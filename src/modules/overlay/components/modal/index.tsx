import useOnclickOutside from 'react-cool-onclickoutside';

import projectsDetailled from '_assets/projectsDetailled';

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
              <img
                className="ui-network-icon"
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="github"
              />
              <p className="ui-network-name">Check on github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
