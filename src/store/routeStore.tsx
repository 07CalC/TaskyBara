import { create } from "zustand"


type RouteStore = {
    path: 'dashboard' | 'projects' | 'tasks' | 'calendar',
    setPath: (path: RouteStore['path']) => void
}

export const useRouteStore = create<RouteStore>((set) => ({
    path: 'dashboard',
    setPath: (path) => set({ path })
}))



