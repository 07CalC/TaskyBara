import { auth } from "@/auth";
import { CalendarView } from "@/components/CalendarView";
import { PageHeader } from "@/components/PageHeader";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <div className="w-full h-full flex flex-col p-4 gap-y-4">
      <PageHeader title="Calendar" />
      <CalendarView />
    </div>
  );
}
