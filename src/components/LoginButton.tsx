"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex gap-x-5 items-center justify-center w-full px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-700 dark:text-white bg-white dark:bg-[#2A2A2A] hover:bg-gray-100 dark:hover:bg-[#333] transition"
    >
      <FaGoogle className="text-2xl" />
      <p className="text-xl font-semibolds">Sign in With Google</p>
    </button>
  );
};
