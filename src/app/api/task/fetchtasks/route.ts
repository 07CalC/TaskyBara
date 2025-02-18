import { auth } from "@/auth";
import { db, projects, tasks } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";



export async function GET(req: Request, res: NextResponse) {
    const session = await auth();
    if(!session) return NextResponse.json({message: "unauthorized"}, {status: 401})
    const userId = session?.user.id as string;
    const fetchedTasks = await db.select().from(tasks).where(eq(tasks.userId, userId))
    return NextResponse.json({fetchedTasks}, {status: 200})
}