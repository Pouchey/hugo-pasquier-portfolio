import React from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import projects from '_assets/projects';

import Icon from '_components/icon';

import { getTechnologyIcon } from '_modules/overlay/utils';

import { getProject } from '_utils/projects';

import './style.css';

interface ModalProps {
  projectId: string | null;
  isOpen: boolean;
  handleClose: () => void;
}

export default React.memo(({ projectId, isOpen, handleClose }: ModalProps) => {
  const ref = useOnclickOutside(() => {
    handleClose();
  });

  const project = getProject(projectId, projects);
  console.log(project?.technologies);
  return (
    <div className={`overlay__modal ${isOpen ? 'active' : ''} `}>
      <div ref={ref} className="overlay__modal__container">
        <div
          className="overlay__modal__header"
          style={{ backgroundImage: `url(${project?.image || ''})` }}
        >
          {project?.showTitle && (
            <div className="overlay__modal__title">{project?.name}</div>
          )}
        </div>

        <div className="overlay__modal__content">
          <div className="overlay__modal__technologies">
            {project?.technologies?.map((technology) => (
              <img
                key={technology}
                className="overlay__modal__technology"
                src={getTechnologyIcon(technology)}
                alt={technology}
              />
            ))}
          </div>
          <p className="overlay__modal__description">{project?.description}</p>
        </div>
        <div className="overlay__modal__footer">
          {project?.github && (
            <div>
              <a
                className="ui__network"
                href={project?.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icon iconName="github" size={32} color="#fff" />
                <p className="ui__network__name">Voir sur github</p>
              </a>
            </div>
          )}
          {project?.itchio && (
            <div>
              <a
                className="ui__network"
                href={project?.itchio}
                target="_blank"
                rel="noreferrer"
              >
                <Icon iconName="itchio" size={32} color="#fff" />
                <p className="ui__network__name">Voir sur itch.io</p>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
