export type MonitorType = {
  id: string;
  projectId: string;
  position: [number, number, number];
  rotation: [number, number, number];

  focus: {
    position: [number, number, number];
  };
};
