import { BakeShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Ground from '_components/ground';

import { useOverlayContext } from '_modules/overlay/hooks/useContext';

import { CameraRig, initCamera } from '_utils/camera';

import Scene from './Scene';

export default () => {
  const camera = initCamera();

  const { state: overlay } = useOverlayContext();

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={camera}
      style={{ width: '100vw', height: '100vh' }}
      eventPrefix="client"
    >
      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.15} groundColor="#1e1e1e" />
      <Scene position={[0, -1.5, 0]} />
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[1, 1, 20]} color="#9d1cc4" />
      <pointLight intensity={1} position={[20, 1, 10]} color="#d63606" />
      <Ground />
      {!overlay.id && <CameraRig />}
      <BakeShadows />
    </Canvas>
  );
};
