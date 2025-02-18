import { create } from "zustand";

type RouteStore = {
  path: "dashboard" | "projects" | "tasks" | "calendar";
  setPath: (path: RouteStore["path"]) => void;
  showMenu: boolean;
  setShowMenu: () => void;
};

export const useRouteStore = create<RouteStore>((set) => ({
  path: "dashboard",
  setPath: (path) => set({ path }),
  showMenu: false,
  setShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
}));
