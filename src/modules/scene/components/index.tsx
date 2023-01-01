import { BakeShadows } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Ground from "_components/ground"
import { CameraRig, initCamera } from "_utils/camera"
import Decor from './decor'


export default () => {

  const camera = initCamera();

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={camera}
      style={{width:'100vw', height:'100vh'}}
      eventSource={document.getElementById('root') as HTMLElement}
      eventPrefix="client"
    >
      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.15} groundColor="#1e1e1e" />
      <spotLight intensity={0.5} position={[0, 10, 10]} angle={0.6} penumbra={1} castShadow />
      <Decor/>
      <Ground/>
      {/* <CameraRig /> */}
      <BakeShadows />
    </Canvas>

  )
}