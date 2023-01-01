import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { Quaternion, Vector3 } from "three"
import { DEFAULT_CAMERA_POSITION,DEFAULT_CAMERA_ROTATION} from "_utils/camera"




export default () => {


  const p = new Vector3(DEFAULT_CAMERA_POSITION.x, DEFAULT_CAMERA_POSITION.y, DEFAULT_CAMERA_POSITION.z)
  const q = new Quaternion(DEFAULT_CAMERA_ROTATION.x, DEFAULT_CAMERA_ROTATION.y, DEFAULT_CAMERA_ROTATION.z, DEFAULT_CAMERA_ROTATION.w)

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt,10)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt,10)
  })

  const moveToObject = (e: any) => {
    e.stopPropagation()

    const {position, rotation} = e.object

    p.set(
      position.x + Math.sin(rotation.y) * 2,
      position.y - 0.5,
      position.z + Math.cos(rotation.y) * 2
    )
    q.setFromAxisAngle(new Vector3(0, 1, 0), rotation.y)
  }

  const resetCamera = () => {
    p.set(DEFAULT_CAMERA_POSITION.x, DEFAULT_CAMERA_POSITION.y, DEFAULT_CAMERA_POSITION.z)
    q.set(DEFAULT_CAMERA_ROTATION.x, DEFAULT_CAMERA_ROTATION.y, DEFAULT_CAMERA_ROTATION.z, DEFAULT_CAMERA_ROTATION.w)
  }

  return {moveToObject, resetCamera}
}