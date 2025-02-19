import Link from "next/link";





export const HeroSection = () => {
    return (
        <div className="w-full py-40 flex sm:px-80 flex-col text-center justify-center items-center gap-y-4 p-4 bg-secondaryLight dark:bg-primaryDark  h-full">
            <p className="sm:text-6xl text-3xl text-center text-black dark:text-white font-bold">
            Manage Your Tasks and Projects with Ease
            </p>
            <p className="sm:text-3xl text-xl text-center text-textLight dark:text-textDark font-bold">
            Stay organized, boost productivity, and never miss a deadline with our all-in-one task and project management solution.
            </p>
            <Link href={"/login"}>
                <button className="bg-black dark:bg-white text-white hover:bg-slate-800 hover:dark:bg-slate-200 text-xl sm:text-3xl font-bold dark:text-black rounded-xl px-4 py-2">Get Started</button>
            </Link>
        </div>
    );
};