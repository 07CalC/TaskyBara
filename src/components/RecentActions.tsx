import { db, recentActivities } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { NotFound } from "./NotFound";
import { auth } from "@/auth";
import { RecentActivities } from "@/types/types";

export const RecentActions = async () => {
  const session = await auth();
  const fetchedRecentActivities: RecentActivities[] = await db
    .select()
    .from(recentActivities)
    .where(eq(recentActivities.userId, session?.user.id || ""))
    .orderBy(desc(recentActivities.createdAt));
  return (
    <div className="sm:w-1/2 w-full sm:h-full bg-secondaryLight dark:bg-primaryDark rounded-xl flex flex-col p-4 gap-y-4">
      <div className="w-full justify-between flex items-center">
        <p className="text-2xl font-bold text-black dark:text-white">
          Recent Activities
        </p>
      </div>
      {fetchedRecentActivities.length === 0 && (
        <NotFound title="No Activites found" />
      )}
      {fetchedRecentActivities.splice(0, 6).map((activity, index) => (
        <div key={index} className="w-full p-2 gap-x-4 flex justify-start">
          {activity.action === "added" && (
            <span className="p-2 bg-blue-100 rounded-full">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </span>
          )}
          {activity.action === "deleted" && (
            <span className="p-2 bg-red-100 rounded-full">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </span>
          )}
          {activity.action === "uncompleted" && (
            <span className="p-2 bg-[#fef9c3] rounded-full">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="#ca8a04"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                ></path>
              </svg>
            </span>
          )}
          {activity.action === "completed" && (
            <span className="p-2 bg-[#dcfce7] rounded-full">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="#17a34a"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          )}
          <p className="text-lg text-textLight dark:text-textDark">
            {activity.details}
          </p>
        </div>
      ))}
    </div>
  );
};
