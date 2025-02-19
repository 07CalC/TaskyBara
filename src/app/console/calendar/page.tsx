'use client';
import { CalendarView } from "@/components/CalendarView";
import { PageHeader } from "@/components/PageHeader";
import { useTaskStore } from "@/store/tasksStore";
import { Task } from "@/types/types";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const session = useSession()
  if (!session) redirect("/login");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const tasks: Task[] = useTaskStore((state) => state.localTasks);
  return (
    <div className="w-full h-full flex flex-col p-4 gap-y-4">
      <PageHeader title="Calendar" />
      <CalendarView tasks={tasks} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
    </div>
  );
}
