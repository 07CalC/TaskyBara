import { auth } from "@/auth";
import { PageHeader } from "@/components/PageHeader";
import { db, projects } from "@/db/schema";
import type { Project } from "@/types/types";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { TasksList } from "@/components/TaskList";
import { deleteProject } from "@/actions/DeleteProjectServerAction";

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  const id = (await params).id;
  if (!id) return redirect("/console/projects");
  const fetchedProject: Project[] = await db
    .select()
    .from(projects)
    .where(eq(projects.id, parseInt(id)));  
  return (
    <div className="w-full h-full flex flex-col p-4 gap-y-4">
      <PageHeader title="Project" />
      <div className="w-full flex flex-col bg-secondaryLight dark:bg-primaryDark rounded-xl p-4 gap-y-4">
        <div className="w-full flex items-center justify-between">
          <p className="text-3xl font-bold text-black dark:text-white">
            {fetchedProject[0].name}
          </p>
          <p className="text-lg text-textLight dark:text-textDark">
            Created:{" "}
            {new Date(fetchedProject[0].createdAt).toLocaleDateString()}
          </p>
        </div><form action={deleteProject} >
            <input defaultValue={fetchedProject[0].id} name="projectId" hidden />
            <input defaultValue={fetchedProject[0].name} name="projectName" hidden />
            <button type="submit" className="text-red-500">
             delete
            </button>
            </form>
        {fetchedProject[0].description && (
          <div className="w-full flex flex-col bg-secondaryLight dark:bg-primaryDark rounded-xl">
            <div className="w-full flex items-center justify-between">
            <p className="text-xl font-bold text-black dark:text-white">
              Description
            </p>
            
            
            </div>
            <p className="text-lg text-textLight dark:text-textDark">
              {fetchedProject[0].description}
            </p>
          </div>
        )}
        
        <TasksList projectId={fetchedProject[0].id}/>
          
        </div>
      
    </div>
  );
}
