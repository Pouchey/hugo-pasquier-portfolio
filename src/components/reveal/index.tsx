import { animated } from 'react-spring';

import useAnimation from './Animations';
import { AnimationType } from './types';

interface RevealProps {
  children: React.ReactNode;
  type?: AnimationType;
  threshold?: number;
  delay?: number;
  [key: string]: any;
}

export default (props: RevealProps) => {
  const {
    children,
    type = 'fadeIn',
    threshold = 0.8,
    delay = 300,
    ...rest
  } = props;

  const [animationRef, animationStyle] = useAnimation(type, threshold, delay);

  return (
    <animated.div
      ref={animationRef}
      style={{
        ...animationStyle,
        transition: `${delay}ms `,
      }}
      {...rest}
    >
      {children}
    </animated.div>
  );
};
