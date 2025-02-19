import { auth } from "@/auth";
import { DashboardAnalyticsCardGrid } from "@/components/DashboardAnalyticsCardGrid";
import { PageHeader } from "@/components/PageHeader";
import { PriorityTasks } from "@/components/PriorityTasks";
import { RecentActions } from "@/components/RecentActions";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Dashboard() {
  const session = await auth();
  if (!session) return redirect("/login");
  return (
    <div className="w-full h-full flex flex-col p-4 gap-y-4">
      <PageHeader title="Dashboard" />
      <Suspense
        fallback={
          <div className="w-full h-full flex justify-center items-center text-3xl text-black dark:text-white">
            Loading...
          </div>
        }
      >
        <DashboardAnalyticsCardGrid />
        <div className="w-full h-full flex-col flex sm:flex-row gap-4  justify-between">
          <RecentActions />
          <PriorityTasks />
        </div>
      </Suspense>
    </div>
  );
}
