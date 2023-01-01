import { MeshReflectorMaterial } from "@react-three/drei"

export default () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
    <planeGeometry attach="geometry" args={[100, 100]} />
    <MeshReflectorMaterial
        blur={[300, 30]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#1e1e1e"
        metalness={0.7} 
        mirror={0}      
      />
  </mesh>
  )
}