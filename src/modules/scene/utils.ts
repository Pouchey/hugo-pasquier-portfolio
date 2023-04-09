import { Vector3 } from 'three';

import { MonitorType } from './types/Monitor';

export const initCamera = () => ({
  position: new Vector3(9, 3.5, 13),

  fov: 70,
});

export const getDefaultState = () => ({
  position: [8, 3, 13],
  lookAt: [3.6, 4.58, 4.43],
});

export const getMonitors = (): MonitorType[] => [
  {
    id: '1',
    projectId: 'Sans Logique',
    position: [3.39, 1.7, 8.05],
    rotation: [1.61, 0, 2.76],
    focus: {
      position: [3.49, 1.2, 9.95],
    },
  },
  {
    id: '2',
    projectId: 'Radial Jump',
    position: [4.73, 4.57, 7.28],
    rotation: [1.79, -0.17, 2.65],
    focus: {
      position: [4.73, 4.57, 7.28],
    },
  },
  {
    id: '3',
    projectId: 'Sans Logique',
    position: [6.83, 4.05, 6.74],
    rotation: [1.53, -0.03, 2.23],
    focus: {
      position: [6.83, 4.05, 6.74],
    },
  },
  {
    id: '4',
    projectId: 'Sans Logique',
    position: [6.69, 2.07, 6.7],
    rotation: [1.46, -0.08, 2.52],
    focus: {
      position: [6.69, 2.07, 6.7],
    },
  },
  {
    id: '5',
    projectId: 'Sans Logique',
    position: [5.48, 0.5, 7.83],
    rotation: [1.41, 0.09, 2.58],
    focus: {
      position: [5.48, 0.5, 7.83],
    },
  },
  {
    id: '6',
    projectId: 'Sans Logique',
    position: [3.03, 4.35, 9.43],
    rotation: [0.93, -0.02, -3.1],
    focus: {
      position: [3.03, 4.35, 9.43],
    },
  },
];
