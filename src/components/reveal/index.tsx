import { animated } from 'react-spring';

import useAnimation from './Animations';
import { AnimationType } from './types';

interface RevealProps {
  children: React.ReactNode;
  type?: AnimationType;
  threshold?: number;
  duration?: number;
  delay?: number;
  [key: string]: any;
}

export default (props: RevealProps) => {
  const {
    children,
    type = 'fadeIn',
    threshold = 0.8,
    duration = 400,
    delay = 0,
    ...rest
  } = props;

  const [animationRef, animationStyle] = useAnimation(
    type,
    threshold,
    delay,
    duration
  );
  return (
    <animated.div ref={animationRef} style={animationStyle} {...rest}>
      {children}
    </animated.div>
  );
};
