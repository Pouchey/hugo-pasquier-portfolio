/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { MonitorType } from '_modules/scene/types/Monitor';

interface Props {
  nodes: { [name: string]: any };
  materials: { [name: string]: any };
  monitor: MonitorType;
}

export default ({ nodes, materials, monitor }: Props) => {
  return (
    <group
      name={`Monitor_${monitor.id}`}
      position={monitor.position}
      rotation={monitor.rotation}
      scale={0.5}
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
        material={materials[`blackScreen.00${monitor.id}`]}
      />
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
