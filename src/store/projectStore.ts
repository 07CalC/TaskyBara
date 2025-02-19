import { Project } from "@/types/types";
import { create } from "zustand";
type ProjectStore = {
  localProjects: Project[];
  setLocalProjects: (project: Project[]) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  localProjects: [],
  setLocalProjects: (project) => set({ localProjects: project }),
}));
