"use server";

import { auth } from "@/auth";
import { db, recentActivities, tasks } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const addTask = async (formData: FormData) => {
  const session = await auth();
  if (!session) return;
  try {
    await db.insert(tasks).values({
      title: formData.get("taskName") as string,
      description: formData.get("taskDescription") as string,
      priority: formData.get("priority") as string,
      dueDate: new Date(formData.get("dueDate") as string),
      userId: session.user.id,
      projectId: formData.get("projectId") as string,
    });
    await db.insert(recentActivities).values({
      userId: session.user.id,
      action: "added",
      details: `added a new task: ${formData.get("taskName") as string}`,
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/console/tasks");
  revalidatePath("/console/dasboard");
};
