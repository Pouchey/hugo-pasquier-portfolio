import { ProjectType } from '_modules/landing/types'
import Item from './Item'
import projects from './projects'
import './style.css'

export default () => {
  return (
    <section className='landing-projects'>
      <div 
        className="landing-projects-header"
      >    
        <h1 className="landing-subtitle">Some of my Projects</h1>

      </div>
    <div className="landing-projects-list">
      {projects.map((project : ProjectType, index : number) => (
        <Item key={index} project={project}/>
      ))}
    </div>


  </section>
  )
}