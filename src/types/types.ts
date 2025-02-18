export type Project = {
  id: number;
  userId: string;
  name: string;
  description: string | null;
  createdAt: Date;
};

export type Task = {
  id: number;
  title: string;
  description: string | null;
  priority: string;
  dueDate: string;
  isCompleted: boolean;
  createdAt: Date;
  projectId: number;
  userId: string;
};

export type RecentActivities = {
  id: number;
  userId: string;
  action: string;
  details?: string | null;
  createdAt: Date;
};
