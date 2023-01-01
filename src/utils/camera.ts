import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { Quaternion, Vector3 } from "three"


export const DEFAULT_CAMERA_POSITION = {
  x: 0,
  y: 0,
  z: 5.5,
}
export const DEFAULT_CAMERA_ROTATION = {
  x: 0,
  y: 0,
  z: 0,
  w: 1,
}

export const initCamera = () => ({
  position: new Vector3(DEFAULT_CAMERA_POSITION.x, DEFAULT_CAMERA_POSITION.y, DEFAULT_CAMERA_POSITION.z),
  quaternion: new Quaternion(DEFAULT_CAMERA_ROTATION.x, DEFAULT_CAMERA_ROTATION.y, DEFAULT_CAMERA_ROTATION.z, DEFAULT_CAMERA_ROTATION.w),
  fov: 75,
})

export const CameraRig = () => {
  useFrame((state, delta) => {

    const px = (state.pointer.x /3 * state.viewport.width) /3
    const py = (1 + state.pointer.y)  / 2
    const pz = state.camera.position.z
    easing.damp3(state.camera.position, [px,py, pz], 0.5, delta, 5)
  
  })
  return null
}