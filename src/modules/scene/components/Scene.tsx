/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

import Ground from '_components/ground';

import { getMonitors } from '_modules/scene/utils';

import useCameraControls from '../hooks/useCameraControls';

import Flat from './flat';
import Monitor from './monitor';

export default (props: any) => {
  const { nodes, materials } = useGLTF('/test.glb');

  const monitors = getMonitors();
  const { resetCamera } = useCameraControls();

  useEffect(() => {
    resetCamera();
  }, []);

  return (
    <group {...props} onPointerDown={() => resetCamera()}>
      <group name="Scene">
        <Flat nodes={nodes} materials={materials} />
        <mesh
          name="Sphère"
          castShadow
          receiveShadow
          material={materials.Matériau}
          position={[3.6, 4.58, 4.43]}
          scale={3}
        >
          <sphereBufferGeometry args={[1, 32, 32]} />
        </mesh>
        <Ground />
      </group>
      {monitors.map((monitor) => (
        <Monitor
          key={monitor.id}
          nodes={nodes}
          materials={materials}
          monitor={monitor}
        />
      ))}
    </group>
  );
};

useGLTF.preload('/test.glb');
