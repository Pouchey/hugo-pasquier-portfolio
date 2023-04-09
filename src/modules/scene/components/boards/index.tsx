/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
interface FlatProps {
  nodes: { [name: string]: any };
  materials: { [name: string]: any };
}

export default ({ nodes, materials }: FlatProps) => {
  return (
    <group
      name="SignBoard"
      position={[-28.78, 0.17, -0.04]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.5}
    >
      <mesh
        name="board16"
        castShadow
        receiveShadow
        geometry={nodes.board16.geometry}
        material={materials.board}
        position={[61.94, -22.78, -15.06]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.75, 0.73, 2.12]}
      />
      <mesh
        name="board18"
        castShadow
        receiveShadow
        geometry={nodes.board18.geometry}
        material={materials.board}
        position={[86.01, -22.78, -12.44]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.61, 2, 1.77]}
      />
      <mesh
        name="board19"
        castShadow
        receiveShadow
        geometry={nodes.board19.geometry}
        material={materials.board}
        position={[84.21, -22.74, -6.39]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.51, 6.1, 1.04]}
      />
      <mesh
        name="board21"
        castShadow
        receiveShadow
        geometry={nodes.board21.geometry}
        material={materials.board}
        position={[72.96, -22.44, -5.37]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[-2.1, -1.35, -5.02]}
      />
      <mesh
        name="board23"
        castShadow
        receiveShadow
        geometry={nodes.board23.geometry}
        material={materials.board}
        position={[34.86, 11.65, -14.45]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[2.94, 0.48, 0.48]}
      />
      <mesh
        name="board25"
        castShadow
        receiveShadow
        geometry={nodes.board25.geometry}
        material={materials.board}
        position={[77.63, -22.21, -12.78]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.06, 2.07, 1.29]}
      />
      <mesh
        name="board31"
        castShadow
        receiveShadow
        geometry={nodes.board31.geometry}
        material={materials.board}
        position={[69.62, -22.59, -12.25]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.49, 4.24, 1.62]}
      />
    </group>
  );
};
