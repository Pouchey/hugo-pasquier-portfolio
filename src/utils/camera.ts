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

    // Moving the camera slightly 
    // based on the mouse position
    // and the camera's current rotation
    const camera = state.camera
    const { x, y } = state.mouse

    // getting the camera's rotation
    const { x: rx, y: ry, z: rz, w: rw } = camera.quaternion

    // calculating the camera's forward vector
    const forward = new Vector3(0, 0, -1)
    forward.applyQuaternion(camera.quaternion)

    // calculating the camera's right vector
    const right = new Vector3(1, 0, 0)
    right.applyQuaternion(camera.quaternion)

    // calculating the camera's up vector
    const up = new Vector3(0, 1, 0)
    up.applyQuaternion(camera.quaternion)

    // calculating the camera's position
    // based on the mouse position
    const px = camera.position.x + (right.x * x ) + (forward.x * y )
    const py = camera.position.y + (right.y * x ) + (forward.y * y )
    const pz = camera.position.z + (right.z * x ) + (forward.z * y )

    // easing the camera's position
    // to the calculated position
    easing.damp3(state.camera.position, [px,py, pz], 1, delta, 1)

    

  })
  return null
}