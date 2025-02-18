"use client";
import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import { useTaskStore } from "@/store/tasksStore";
import { Task } from "@/types/types";

export const CalendarView = () => {
  const tasks: Task[] = useTaskStore((state) => state.localTasks);
  const [currentMonth, setCurrentMonth] = useState(new Date());
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
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 bg-secondaryLight dark:bg-primaryDark rounded-xl"
        >
          &lt; Prev
        </button>
        <h2 className="text-xl font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 bg-secondaryLight dark:bg-primaryDark rounded-xl"
        >
          Next &gt;
        </button>
      </div>

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
                  className="text-xs bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded mt-1"
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
                {tasksForDay.map((task, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded mt-1"
                  >
                    {task.title}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
