import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef, useState } from 'react';
import { Object3D, Quaternion, Vector3 } from 'three';

import { useOverlayContext } from '_modules/overlay/hooks/useContext';

import {
  DEFAULT_CAMERA_POSITION,
  DEFAULT_CAMERA_ROTATION,
} from '_utils/camera';

export default () => {
  const { dispatch } = useOverlayContext();

  const p = useRef(
    new Vector3(
      DEFAULT_CAMERA_POSITION.x,
      DEFAULT_CAMERA_POSITION.y,
      DEFAULT_CAMERA_POSITION.z
    )
  );
  const q = useRef(
    new Quaternion(
      DEFAULT_CAMERA_ROTATION.x,
      DEFAULT_CAMERA_ROTATION.y,
      DEFAULT_CAMERA_ROTATION.z,
      DEFAULT_CAMERA_ROTATION.w
    )
  );

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p.current, 0.4, dt, Infinity);
    easing.dampQ(state.camera.quaternion, q.current, 0.4, dt, Infinity);
  });

  const moveToObject = (
    e: {
      object: Object3D;
    },
    id: string
  ) => {
    
    dispatch({ type: 'reset', payload: { id: null } });

    const { position, rotation } = e.object;

    p.current.set(
      position.x + Math.sin(rotation.y) * 2,
      position.y - 0.5,
      position.z + Math.cos(rotation.y) * 2
    );
    q.current.setFromAxisAngle(new Vector3(0, 1, 0), rotation.y);

    setTimeout(() => {
      dispatch({ type: 'setSelectedObject', payload: { id } })
    },
    1000);

  };

  const resetCamera = () => {
    p.current.set(
      DEFAULT_CAMERA_POSITION.x,
      DEFAULT_CAMERA_POSITION.y,
      DEFAULT_CAMERA_POSITION.z
    );
    q.current.set(
      DEFAULT_CAMERA_ROTATION.x,
      DEFAULT_CAMERA_ROTATION.y,
      DEFAULT_CAMERA_ROTATION.z,
      DEFAULT_CAMERA_ROTATION.w
    );

    dispatch({ type: 'reset', payload: { id: null } });
  };

  return { moveToObject, resetCamera };
};
