import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

import { useOverlayContext } from '_modules/overlay/hooks/useContext';

import { getDefaultState } from '../utils';

export default () => {
  const { camera } = useThree();
  const defaultState = getDefaultState();

  const { dispatch } = useOverlayContext();
  const startPosition = new Vector3();
  const startLookAt = new Vector3();
  const targetPosition = new Vector3();
  const targetLookAt = new Vector3();
  let startTime: number | null = null;
  const duration = 1000; // time in milliseconds

  const resetCamera = () => {
    dispatch({ type: 'reset' });
    startPosition.copy(camera.position);
    startLookAt.copy(
      camera.getWorldDirection(new Vector3()).add(camera.position)
    );
    targetPosition.fromArray(defaultState.position);
    targetLookAt.fromArray(defaultState.lookAt);
    startTime = performance.now();
    requestAnimationFrame(animateCamera);
  };

  const moveCamera = (
    position: [number, number, number],
    lookAt: [number, number, number]
  ) => {
    startPosition.copy(camera.position);
    startLookAt.copy(
      camera.getWorldDirection(new Vector3()).add(camera.position)
    );
    targetPosition.fromArray(position);
    targetLookAt.fromArray(lookAt);
    startTime = performance.now();
    requestAnimationFrame(animateCamera);
  };

  const animateCamera = (currentTime: number | null) => {
    if (!currentTime) return;
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const t = Math.min(1, timeElapsed / duration);
    const easeT = easeOutQuad(t);
    camera.position.lerpVectors(startPosition, targetPosition, easeT);
    const newLookAt = startLookAt.clone().lerp(targetLookAt, easeT);
    camera.lookAt(newLookAt);
    if (t < 1) requestAnimationFrame(animateCamera);
  };

  const easeOutQuad = (t: number) => {
    return 1 - (1 - t) * (1 - t);
  };

  return { resetCamera, moveCamera };
};
