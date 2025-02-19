import { auth } from "@/auth";
import { db, projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";



export async function GET() {
    const session = await auth();
    try {
        const fetchProjects = await db.select().from(projects).where(eq(projects.userId, session?.user.id as string));
        return NextResponse.json({ fetchProjects }, { status: 200 });
    } catch (error) {
        console.log("error in api/project/fetchProjects", error);
        return NextResponse.json({ message: "internal server error" }, { status: 500 });
    }
}