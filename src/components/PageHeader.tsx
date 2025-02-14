import { ThemeToggleButton } from "./ThemeToggleButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


type props = {
  title: string;
};

export const PageHeader = ({ title }: props) => {
  return (
    <div className="w-full flex justify-between py-2 px-4 bg-secondaryLight rounded-xl dark:bg-primaryDark">
      <p className="text-2xl font-bold text-black dark:text-white">{title}</p>
      <div className="flex gap-x-4">
      <Dialog>
        <DialogTrigger className="bg-black dark:bg-white p-2 rounded-xl text-white dark:text-black">Add Task</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
           
          </DialogHeader>

        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger className="bg-black dark:bg-white p-2 rounded-xl text-white dark:text-black">Add Project</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a new project</DialogTitle>
              
          </DialogHeader>
          <form className="flex flex-col gap-y-4">
            <label htmlFor="projectName">Project Name</label>
            <input type="text" id="projectName" className="p-2 rounded-xl border border-black dark:border-white"/>
            <label htmlFor="projectDescription">Project Description</label>
            <textarea id="projectDescription" className="p-2 rounded-xl border border-black dark:border-white"/>
            <button type="submit" className="bg-black dark:bg-white p-2 rounded-xl text-white dark:text-black">Add Project</button>
          </form>
        </DialogContent>
      </Dialog>
      </div>
      <ThemeToggleButton />
    </div>
  );
};
