import { ProjectDetailledType } from '_types/project';

export const getProject = (
  id: string | null,
  projects: ProjectDetailledType[]
) => {
  if (!id) return null;
  return projects.find((project: ProjectDetailledType) => project.id === id);
};
