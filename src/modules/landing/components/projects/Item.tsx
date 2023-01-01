import { ProjectType } from "_modules/landing/types"

export default ({project } : {project:ProjectType}) => {
  return (
    <div
      className="landing-projects-item"
    >
      <img
        className="landing-projects-item-image"
        src={project.image}
        alt={project.name}
      />
      <div className="landing-projects-item-info">
        <h2 className="landing-projects-item-title">{project.name}</h2>
        <p className="landing-projects-item-description">{project.description}</p>
      </div>
    </div>
  )
}