

type props ={
    title: string
    svgColor: string
    svgD: string
    quantity: string
    strokeColor: string
}



export const DashboardAnalyticsCard = ({title, svgColor, svgD, quantity, strokeColor}: props) => {
    return (
        <div className="w-1/4 flex flex-col gap-y-5 bg-secondaryLight py-8 px-6 rounded-xl dark:bg-primaryDark">
          <div className="w-full flex justify-between items-center">
            <p className="text-md font-semibold text-textLight dark:text-textDark">
              {title}
            </p>
            <span className={`p-2 ${svgColor} rounded-full`}>
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke={strokeColor}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={svgD}
                ></path>
              </svg>
            </span>
          </div>
          <div className="w-full text-center flex justify-between items-center">
                <p className="text-2xl font-bold text-black dark:text-white">
                    {quantity}
                </p>
            </div>
        </div>
    )
}