import { auth } from "@/auth";
import { db, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();
    if (!session)
        return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    const userId = session?.user.id as string;
    try {
        const fetchTasks = await db.select().from(tasks).where(eq(tasks.userId, userId));
        return NextResponse.json({ fetchTasks }, { status: 200 });
    } catch (error) {
        console.log("error in api/task/fetchtasks", error);
        return NextResponse.json({ message: "internal server error" }, { status: 500 });
    }
}
