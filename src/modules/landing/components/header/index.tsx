import {animated, useSpring} from 'react-spring'
import { useResumeContext } from '_modules/resume/hooks/useContext';
import './style.css'
export default () => {

  const { dispatch: dispatchResume } = useResumeContext();

  const fadeInLeft = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 300 }
  })

  const fadeInRight = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 300 }
  })

  return(
    <section
        className='landing-header'
      >
        <animated.p 
          className='ui-title'
          style={fadeInLeft}
        >
          Hugo Pasquier —
        </animated.p>
        <animated.span 
          className='ui-info' 
          style={fadeInRight}
          onClick={() => dispatchResume({type:'openResume'})}
        >
          About me
        </animated.span>
      </section>
  )
}