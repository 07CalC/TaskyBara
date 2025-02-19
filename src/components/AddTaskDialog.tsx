import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddTaskDialogProjectSelectList } from "./AddTaskDialogProjectSelectList";
import { addTask } from "../actions/AddTaskServerAction";
import { SubmitButton } from "./SubmitButton";

export const AddTaskDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-black dark:bg-white p-2 rounded-xl text-sm sm:text-lg text-white dark:text-black">
        Add Task
      </DialogTrigger>
      <DialogContent className="bg-secondaryLight dark:bg-primaryDark border-black dark:border-white">
        <DialogHeader>
          <DialogTitle>Add a new Task</DialogTitle>
        </DialogHeader>
        <form action={addTask} className="flex flex-col gap-y-4">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            name="taskName"
            required
            id="taskName"
            className="p-2 rounded-xl bg-secondaryLight dark:bg-primaryDark border border-black dark:border-white"
          />
          <label htmlFor="taskDescription">Task Description</label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            className="p-2 rounded-xl bg-secondaryLight dark:bg-primaryDark border border-black dark:border-white"
          />
          <label htmlFor="projectId">Project</label>
          <select
            required
            name="projectId"
            id="projectId"
            className="p-2 rounded-xl bg-secondaryLight dark:bg-primaryDark border border-black dark:border-white"
          >
            <AddTaskDialogProjectSelectList />
          </select>
          <div className="flex gap-x-4 items-center justify-center">
            <label htmlFor="priority">Priority</label>
            <select
              required
              name="priority"
              id="priority"
              className="p-2 rounded-xl bg-secondaryLight dark:bg-primaryDark border border-black dark:border-white"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <label htmlFor="dueDate">Due Date</label>
            <input
              required
              type="date"
              name="dueDate"
              id="dueDate"
              className="p-2 rounded-xl bg-secondaryLight dark:bg-primaryDark border border-black dark:border-white self-end"
            />
          </div>
          {/* <button
            type="submit"
            className="bg-black dark:bg-white p-2 rounded-xl text-white dark:text-black"
          >
            Add Tasks
          </button> */}
          <SubmitButton text="Add Task" />
        </form>
      </DialogContent>
    </Dialog>
  );
};
