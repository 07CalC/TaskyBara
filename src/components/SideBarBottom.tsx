import { useSession } from "next-auth/react";
import { SignOutButton } from "./SignOutButton";

export const SideBarBottom = () => {
  const session = useSession();
  return (
    <div className="flex justify-between rounded-xl absolute bottom-3 w-11/12 items-center p-3 bg-primaryLight dark:bg-secondaryDark">
      <div className="flex items-center gap-2">
        <img
          src={session?.data?.user.image!}
          alt="Profile"
          width={100}
          height={100}
          className="object-contain h-12 w-12 rounded-full"
        />
        <p className="text-md dark:text-white text-black font-bold">
          {session?.data?.user.name}
        </p>
      </div>
      <SignOutButton />
    </div>
  );
};
