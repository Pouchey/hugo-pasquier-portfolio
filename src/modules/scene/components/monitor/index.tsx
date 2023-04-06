/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useVideoTexture } from '@react-three/drei';

import { useOverlayContext } from '_modules/overlay/hooks/useContext';
import useCameraControls from '_modules/scene/hooks/useCameraControls';
import { MonitorType } from '_modules/scene/types/Monitor';

interface Props {
  nodes: { [name: string]: any };
  materials: { [name: string]: any };
  monitor: MonitorType;
}

export default ({ nodes, materials, monitor }: Props) => {
  const { moveCamera } = useCameraControls();

  const { dispatch } = useOverlayContext();

  const handlePointerDown = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    moveCamera(monitor.focus.position, monitor.position);
    dispatch({ type: 'setSelectedObject', payload: { id: monitor.id } });
  };

  const texture = useVideoTexture('./assets/EarthOpenGL/demo_vid.mp4');
  return (
    <group
      name={`Monitor_${monitor.id}`}
      position={monitor.position}
      rotation={monitor.rotation}
      scale={0.5}
      onPointerDown={handlePointerDown}
    >
      <mesh
        name={`CubeMonitorArm01001_Cube00${monitor.id}`}
        castShadow
        receiveShadow
        geometry={nodes[`CubeMonitorArm01001_Cube00${monitor.id}`]?.geometry}
        material={materials.customMetalicArm}
      />
      <mesh
        name={`CubeMonitorArm01001_Cube00${monitor.id}_1`}
        castShadow
        receiveShadow
        geometry={nodes[`CubeMonitorArm01001_Cube00${monitor.id}_1`]?.geometry}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        name={`CubeMonitorArm01001_Cube00${monitor.id}_2`}
        castShadow
        receiveShadow
        geometry={nodes[`CubeMonitorArm01001_Cube00${monitor.id}_2`]?.geometry}
        material={materials[`monitoHuelle2dark.00${monitor.id}`]}
      />
      <mesh
        name={`CubeMonitorArm01001_Cube00${monitor.id}_3`}
        castShadow
        receiveShadow
        geometry={nodes[`CubeMonitorArm01001_Cube00${monitor.id}_3`]?.geometry}
        material={materials[`HolzverkleidungDark.00${monitor.id}`]}
      />
      <mesh
        name={`CubeMonitorArm01001_Cube00${monitor.id}_4`}
        castShadow
        receiveShadow
        geometry={nodes[`CubeMonitorArm01001_Cube00${monitor.id}_4`]?.geometry}
        material={materials.GlowLampBlue}
      />
    </group>
  );
};
