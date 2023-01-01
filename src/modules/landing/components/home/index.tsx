import {animated, useSpring} from 'react-spring'
import { useResumeContext } from '_modules/resume/hooks/useContext';
import './style.css'
export default () => {
  
  const { dispatch: dispatchResume } = useResumeContext();

  const zoomIn = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 1000,
    config: { duration: 300 },
  })

  return (
    <section 
    className='landing-home'
  >
    <animated.div
      className='landing-home-present'
      style={zoomIn}
      >
      <h1 className="landing-title">Hi, I'm Hugo</h1>
      <h2 className="landing-subtitle">I'm a <span className='landing-highlight'>Game Developer</span></h2>
    </animated.div>

    <animated.div
      className='landing-home-description'
      style={zoomIn}
    >
      <p 
        className="landing-description"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ducimus corrupti fuga nesciunt impedit eaque maxime suscipit architecto temporibus molestiae adipisci blanditiis, nemo deserunt, illo iusto necessitatibus consequuntur laudantium velit.

      </p>
      <div className="landing-line"/>
      <span 
        className='landing-info' 
        onClick={() => dispatchResume({type:'openResume'})}
      >
        About me
      </span>

    </animated.div>

  </section>
  )
}