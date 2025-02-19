import { addProject } from "@/actions/AddProjectServerAction";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitButton } from "./SubmitButton";

export const AddProjectDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-black dark:bg-white p-2 text-sm sm:text-lg rounded-xl text-white dark:text-black">
        Add Project
      </DialogTrigger>
      <DialogContent className="bg-secondaryLight dark:bg-primaryDark border-black dark:border-white">
        <DialogHeader>
          <DialogTitle>Add a new project</DialogTitle>
        </DialogHeader>
        <form action={addProject} className="flex flex-col gap-y-4">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            name="projectName"
            required
            id="projectName"
            className="p-2 rounded-xl bg-secondaryLight dark:bg-primaryDark border border-black dark:border-white"
          />
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            className="p-2 rounded-xl bg-secondaryLight dark:bg-primaryDark border border-black dark:border-white"
          />
          {/* <button
            type="submit"
            className="bg-black dark:bg-white p-2 rounded-xl text-white dark:text-black"
          >
            Add Project
          </button> */}
          <SubmitButton text="Add Project" />
        </form>
      </DialogContent>
    </Dialog>
  );
};
