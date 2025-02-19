import Link from "next/link";

export default function CTASection() {
  return (
    <div className="w-full text-center py-40 px-6 bg-secondaryLight dark:bg-primaryDark">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Stay Organized, Stay Productive
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
        Start managing your tasks efficiently with our powerful task management system.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/login">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Get Started for Free
          </button>
        </Link>
        
      </div>
    </div>
  );
}
