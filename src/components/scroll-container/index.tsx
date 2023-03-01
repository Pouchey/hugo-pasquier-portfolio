import { MutableRefObject, useEffect } from 'react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const newRef = ref as MutableRefObject<HTMLDivElement>;

  return (
    <div
      ref={newRef}
      style={{
        width: '100%',
        height: '100%',

        overflowY: 'scroll',
      }}
    >
      {children}
    </div>
  );
});
