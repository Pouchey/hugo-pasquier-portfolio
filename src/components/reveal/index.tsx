import useAnimation from './Animations'
import {animated} from 'react-spring'

export default (props: any) => {

  const { children, type = 'fadeIn', threshold = 0.8, delay = 300, ...rest } = props;

  const [animationRef,animationStyle] = useAnimation(type,threshold, delay);

  return (
    <animated.div
      ref={animationRef}
      style={animationStyle}
      {...rest}
    >
      {children}
    </animated.div>
  )



}