import { auth } from "@/auth";
import { DashboardAnalyticsCard } from "@/components/DashboardAnalyticsCard";
import { PageHeader } from "@/components/PageHeader";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <div className="w-full flex flex-col p-4 gap-y-4">
      <PageHeader title="Dashboard" />
      <div className="w-full flex gap-x-4">
        <DashboardAnalyticsCard strokeColor="#4077ed" title="Total Tasks" svgColor="bg-[#dbeafe]" svgD="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" quantity="23" />
        <DashboardAnalyticsCard strokeColor="#ca8a04" title="Pending Tasks" svgColor="bg-[#fef9c3]" svgD="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" quantity="2" />
        <DashboardAnalyticsCard strokeColor="#17a34a" title="Completed" svgColor="bg-[#dcfce7]" svgD="M5 13l4 4L19 7" quantity="5" />
        <DashboardAnalyticsCard strokeColor="#df3737" title="High Priority" svgColor="bg-[#fee2e2]" svgD="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" quantity="3" />
      </div>
    </div>
  );
}
