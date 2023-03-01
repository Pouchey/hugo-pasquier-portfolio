import { useRef } from 'react';
import { useSpring } from 'react-spring';

import useIntersectionObserver from '_hooks/useIntersection';

import { AnimationType } from './types';

const getAnimation = (
  animationType: AnimationType,
  isVisible: boolean,
  delay: number
) => {
  switch (animationType) {
    case 'zoomIn':
      return useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.5)',
        config: {
          duration: delay,
        },
      });
    case 'fadeInLeft':
      return useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
        config: {
          duration: delay,
        },
      });
    case 'fadeInRight':
      return useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        config: {
          duration: delay,
        },
      });
    case 'fadeInUp':
      return useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(99%)',
        config: {
          duration: delay,
        },
      });
    default:
    case 'fadeIn':
      return useSpring({
        opacity: isVisible ? 1 : 0,
        config: {
          duration: delay,
        },
      });
  }
};

export default (animationType: AnimationType, threshold: number) => {
  const animationRef = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(animationRef, {
    threshold,
    freezeOnceVisible: true,
  });

  const isVisible = !!entry?.isIntersecting;

  const animation = getAnimation(animationType, isVisible, 0);

  return [animationRef, animation] as const;
};
