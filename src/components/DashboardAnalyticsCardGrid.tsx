import { db, tasks } from "@/db/schema";
import { DashboardAnalyticsCard } from "./DashboardAnalyticsCard";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { Task } from "@/types/types";

export const DashboardAnalyticsCardGrid = async () => {
  const session = await auth();
  const fetchedTasks: Task[] = await db
    .select()
    .from(tasks)
    .where(eq(tasks.userId, session?.user.id || ""));
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4">
      <DashboardAnalyticsCard
        strokeColor="#4077ed"
        title="Total Tasks"
        svgColor="bg-[#dbeafe]"
        svgD="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        quantity={fetchedTasks.length.toString()}
      />
      <DashboardAnalyticsCard
        strokeColor="#ca8a04"
        title="Pending Tasks"
        svgColor="bg-[#fef9c3]"
        svgD="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        quantity={fetchedTasks
          .filter((task) => !task.isCompleted)
          .length.toString()}
      />
      <DashboardAnalyticsCard
        strokeColor="#17a34a"
        title="Completed"
        svgColor="bg-[#dcfce7]"
        svgD="M5 13l4 4L19 7"
        quantity={fetchedTasks
          .filter((task) => task.isCompleted)
          .length.toString()}
      />
      <DashboardAnalyticsCard
        strokeColor="#df3737"
        title="High Priority"
        svgColor="bg-[#fee2e2]"
        svgD="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        quantity={fetchedTasks
          .filter((task) => task.priority === "high")
          .length.toString()}
      />
    </div>
  );
};
