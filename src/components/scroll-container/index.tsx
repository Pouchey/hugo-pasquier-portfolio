import { MutableRefObject, useEffect, useRef } from 'react';
import React from 'react';

import useWindowSize from '_hooks/useWindowSize';

import './style.css';

interface Props {
  children: React.ReactNode;
  reset: boolean;
}

export default ({ children, reset }: Props) => {
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();
  const data = {
    ease: 0.07,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    if (!scrollingContainerRef.current) return;
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  useEffect(() => {
    if (reset) {
      data.current = 0;
      data.previous = 0;
      data.rounded = 0;
    }
  }, [reset]);

  const smoothScrollingHandler = () => {
    if (!scrollingContainerRef.current) return;
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="scroll-container">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};
