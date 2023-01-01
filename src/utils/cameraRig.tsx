import { useFrame } from "@react-three/fiber"
import { easing } from "maath"

export default () => {
  useFrame((state, delta) => {

    const px = (state.pointer.x /3 * state.viewport.width) /3
    const py = (1 + state.pointer.y)  / 2
    easing.damp3(state.camera.position, [px,py, 5.5], 0.5, delta, 5)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}