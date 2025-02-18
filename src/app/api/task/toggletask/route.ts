import { auth } from "@/auth";
import { db, recentActivities, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";



export async function POST (req: Request){
    const data = await req.json();
    const { taskId } = data;
    const session = await auth();
    if(!session) return NextResponse.json({message: "unauthorized"}, {status: 401})
    const task = await db.select().from(tasks).where(eq(tasks.id, taskId));
    if(!task) return NextResponse.json({message: "task not found"}, {status: 401})
    try{
        await db.update(tasks).set({isCompleted: !task[0].isCompleted}).where(eq(tasks.id, taskId))
        await db.insert(recentActivities).values({
            userId: session.user.id,
            action: task[0].isCompleted ? "uncompleted" : "completed",
            details: task[0].isCompleted ? `Marked ${task[0].title} as uncomplete` : `Marked ${task[0].title} as complete`
        })
    }
    catch(error){
        console.log("error in api/task/toggletask", error)
        return NextResponse.json({message: "internal server error"}, {status: 500})
    }
    return NextResponse.json({ message: "task added successfully"}, {status: 201})
}