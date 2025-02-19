import { addMonths, format, subMonths } from "date-fns"

type props = {
    currentMonth: Date;
    setCurrentMonth: (date: Date) => void;
}

export const CalendarMonthNav = ({currentMonth, setCurrentMonth}: props) => {
    return (
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
    )
}