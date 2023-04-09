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
        landing: true,
      },
    });
  };

  return (
    <Reveal
      type="zoomIn"
      threshold={0.1}
      className="landing__projects__item"
      onClick={handleClick}
    >
      <img
        className="landing__projects__item__image"
        src={project.image}
        alt={project.name}
      />
      <div className="landing__projects__item__info">
        <h2 className="landing__projects__item__title">{project.name}</h2>
        <p className="landing__projects__item__description">{project.short}</p>
      </div>
    </Reveal>
  );
};
