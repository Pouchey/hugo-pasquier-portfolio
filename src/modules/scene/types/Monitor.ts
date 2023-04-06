export type MonitorType = {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];

  focus: {
    position: [number, number, number];
  };
};
