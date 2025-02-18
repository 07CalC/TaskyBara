"use server";

import { auth } from "@/auth";
import { db, projects, recentActivities } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const addProject = async (formData: FormData) => {
  const session = await auth();
  if (!session) return;
  try {
    await db.insert(projects).values({
      userId: session.user.id,
      name: formData.get("projectName") as string,
      description: formData.get("projectDescription") as string,
    });
    await db.insert(recentActivities).values({
      userId: session.user.id,
      action: "added",
      details: `added a new project: ${formData.get("projectName") as string}`,
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/console/projects");
};
