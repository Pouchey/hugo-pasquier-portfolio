export type ProjectType = {
  name: string;
  short: string;
  description: string;
  image: string;
  slider: string[];
  github?: string;
  itchio?: string;
  release?: string;
};

export type ProjectDetailledType = {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
};
