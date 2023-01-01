import { Sphere } from "@react-three/drei"


export default () => {
  return(
    <group position={[0, -0.5, 0]}>
      <Sphere position={[0, 0, 0]} >
        <meshStandardMaterial attach="material" color="red" />
      </Sphere>
      <Sphere position={[2, 1, -5]} >
        <meshStandardMaterial attach="material" color="blue" />
      </Sphere>
      <Sphere position={[-1.5, 1, -2]} >
        <meshStandardMaterial attach="material" color="green" />
      </Sphere>
    </group>
  )
}