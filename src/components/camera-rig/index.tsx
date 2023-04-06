import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

export default ({ position = [0, 0, 0], lookAt = [0, 0, 0] }) => {
  useFrame((state, delta) => {
    const posX =
      position[0] + ((state.pointer.x / 2) * (state.viewport.width / 2)) / 10;
    const posY =
      position[1] + ((state.pointer.y / 2) * (state.viewport.height / 2)) / 10;
    const posZ = position[2];

    easing.damp3(state.camera.position, [posX, posY, posZ], 0.5, delta);

    state.camera.lookAt(lookAt[0], lookAt[1], lookAt[2]);
  });

  return null;
};
