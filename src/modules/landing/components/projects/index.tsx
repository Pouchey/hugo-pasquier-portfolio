import { ProjectType } from '_types/project';

import projects from '../../../../assets/projects';

import Item from './Item';
import './style.css';

export default () => {
  return (
    <div className="landing__projects">
      <div className="landing__projects__header">
        <h1 className="landing__projects__title">Mes Projets</h1>
      </div>
      <div className="landing__projects__list">
        {projects.map((project: ProjectType, index: number) => (
          <Item key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
