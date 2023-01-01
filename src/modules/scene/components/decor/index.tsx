import { Box, Sphere } from "@react-three/drei"
import useCameraControls from "_modules/scene/hooks/useCameraControls"

export default () => {

  const {moveToObject, resetCamera} = useCameraControls()

  return(
    <group 
      position={[0, -0.5, 0]}
      onPointerMissed={resetCamera}
    >
      <Box
        position={[0, 0, 0]} 
        rotation={[0, 1, 0]}
        onClick={moveToObject}
      >
        <meshStandardMaterial attach="material" color="red" />
      </Box>
      <Box 
        position={[2, 1, -5]}
        rotation={[0, 0, 0]}
        onClick={moveToObject}
      >
        <meshStandardMaterial attach="material" color="blue" />
      </Box>
      <Box 
        position={[-1.5, 1, -2]}  
        rotation={[0, 5, 0]}  
        onClick={moveToObject}
      >
        <meshStandardMaterial attach="material" color="green" />
      </Box>
    </group>
  )
}