import Reveal from '_components/reveal';

import { useOverlayContext } from '_modules/overlay/hooks/useContext';

import { ProjectType } from '_types/project';

export default ({ project }: { project: ProjectType }) => {
  const { dispatch } = useOverlayContext();

  const handleClick = () => {
    dispatch({
      type: 'setSelectedObject',
      payload: {
        id: project.name,
        active: true,
      },
    });
  };

  return (
    <Reveal
      type="zoomIn"
      threshold={0.1}
      className="landing-projects-item"
      onClick={handleClick}
    >
      <img
        className="landing-projects-item-image"
        src={project.image}
        alt={project.name}
      />
      <div className="landing-projects-item-info">
        <h2 className="landing-projects-item-title">{project.name}</h2>
        <p className="landing-projects-item-description">{project.short}</p>
      </div>
    </Reveal>
  );
};
