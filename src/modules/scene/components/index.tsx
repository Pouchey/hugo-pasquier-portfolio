import { BakeShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import CameraRig from '_components/camera-rig';

import { useOverlayContext } from '_modules/overlay/hooks/useContext';

import { getDefaultState, initCamera } from '../utils';

import Scene from './Scene';

export default () => {
  const { state: overlay } = useOverlayContext();
  const camera = initCamera();
  const defaultState = getDefaultState();

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={camera}
      style={{ width: '100vw', height: '100vh' }}
      eventPrefix="client"
    >
      <color attach="background" args={['black']} />
      <Scene position={[0, -1.5, 0]} />
      <ambientLight intensity={0.4} />
      <pointLight intensity={1} position={[1, 1, 20]} color="#9d1cc4" />
      <pointLight intensity={1} position={[20, 1, 10]} color="#d63606" />

      {!overlay.id && (
        <CameraRig
          position={defaultState.position}
          lookAt={defaultState.lookAt}
        />
      )}

      <BakeShadows />
    </Canvas>
  );
};
