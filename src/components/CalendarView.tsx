"use client";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
} from "date-fns";
import { Task } from "@/types/types";
import { CalendarMonthNav } from "./CalendarMonthNav";

type props ={
  tasks: Task[]
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
}

const CalendarView = ({tasks, currentMonth, setCurrentMonth}: props) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className="w-full p-4">
      <CalendarMonthNav currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />

      <div className="hidden md:grid grid-cols-7 gap-2 border-t border-gray-300">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {days.map((date, index) => {
          const tasksForDay = tasks.filter((task) =>
            isSameDay(new Date(task.dueDate), date)
          );

          return (
            <div
              key={index}
              className="p-2 border rounded-xl bg-secondaryLight dark:bg-primaryDark border-gray-300 min-h-[80px] flex flex-col items-center"
            >
              <span
                className={
                  isSameDay(date, new Date()) ? "font-bold text-red-500" : ""
                }
              >
                {format(date, "d")}
              </span>
              {tasksForDay.map((task, index) => (
                <span
                  key={index}
                  className={`text-xs ${task.isCompleted ? "line-through bg-green-400 dark:bg-green-800" : "bg-blue-400 dark:bg-blue-800"} ${task.priority === "high" && !task.isCompleted ? "bg-red-400 dark:bg-red-800" : task.priority === "medium" && !task.isCompleted ? "bg-yellow-400 dark:bg-yellow-800" : task.priority === "low" && !task.isCompleted ? "bg-blue-400 dark:bg-blue-800" : ""}  px-2 py-1 rounded mt-1`}
                >
                  {task.title}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      <div className="md:hidden overflow-x-auto">
        <div className="grid grid-cols-7 gap-2 min-w-max">
          {days.map((date, index) => {
            const tasksForDay = tasks.filter((task) =>
              isSameDay(new Date(task.dueDate), date)
            );

            return (
              <div
                key={index}
                className="w-20 h-full flex-shrink-0 bg-secondaryLight dark:bg-primaryDark rounded-xl p-2 border border-gray-300 min-h-[80px] flex flex-col items-center"
              >
                <span
                  className={
                    isSameDay(date, new Date()) ? "font-bold text-red-500" : ""
                  }
                >
                  {format(date, "d")}
                </span>
                {tasksForDay.map((task, taskIndex) => (
                  <div key={taskIndex}>{task.title}</div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { CalendarView };
