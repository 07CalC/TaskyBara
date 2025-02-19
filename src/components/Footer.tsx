
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-primaryLight dark:bg-secondaryDark text-gray-800 dark:text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex  md:grid-cols-3 gap-8 justify-between">
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Task Manager</h2>
          <p className="mt-2 text-sm">Stay organized and boost your productivity effortlessly.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </div>
    </footer>
  );
}
