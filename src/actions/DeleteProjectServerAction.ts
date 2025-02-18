"use server"

import { auth } from "@/auth";
import { db, projects, recentActivities } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";


export const deleteProject = async (formData: FormData) => {
    const session = await auth();
    if (!session) return;
    try {
        await db.delete(projects).where(eq(projects.id, parseInt(formData.get('projectId') as string)));
        await db.insert(recentActivities).values({
            userId: session.user.id,
            action: "deleted",
            details: `deleted a project: ${formData.get("projectName") as string}`,
        });
    } catch (error) {
        console.log(error);
    }
    redirect("/console/projects");
};