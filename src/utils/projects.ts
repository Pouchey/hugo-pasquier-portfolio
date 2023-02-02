import { ProjectType } from '_types/project';

export const getProject = (id: string | null, projects: ProjectType[]) => {
  if (!id) return null;
  return projects.find((project: ProjectType) => project.name === id);
};
