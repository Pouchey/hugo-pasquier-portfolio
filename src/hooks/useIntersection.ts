import { RefObject, useEffect, useState } from 'react';

import useDebounce from './useDebounce';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  delay?: number;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
    delay = 100,
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const debouncedEntry = useDebounce<IntersectionObserverEntry | undefined>(
    entry,
    delay
  );

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [
    elementRef?.current,
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return debouncedEntry;
}

export default useIntersectionObserver;
