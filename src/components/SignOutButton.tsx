"use client";
import { signOut } from "next-auth/react";
import { PiSignOutBold } from "react-icons/pi";

export const SignOutButton = () => {
  return (
    <button
      title="sign out"
      onClick={async () => {
        await signOut();
      }}
    >
      <PiSignOutBold
        className="text-2xl text-black dark:text-white"
      />
    </button>
  );
};
