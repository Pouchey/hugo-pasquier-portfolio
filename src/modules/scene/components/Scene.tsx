/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

import { getMonitors } from '_modules/scene/utils';

import Flat from './flat';
import Monitor from './monitor';

export default (props: any) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/test.glb');

  const monitors = getMonitors();

  return (
    <group ref={group} {...props}>
      <group name="Scene">
        <Flat nodes={nodes} materials={materials} />
        <mesh
          name="Sphère"
          castShadow
          receiveShadow
          geometry={nodes.Sphère.geometry}
          material={materials.Matériau}
          position={[3.6, 4.58, 4.43]}
          scale={3}
        />
      </group>
      {monitors.map((monitor) => (
        <Monitor
          key={monitor.id}
          nodes={nodes}
          materials={materials}
          monitor={monitor}
          moveToObject={moveToObject}
        />
      ))}
    </group>
  );
};

useGLTF.preload('/test.glb');
