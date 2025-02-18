"use client";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useThemeStore } from "@/store/themeStore";

export const ThemeToggleButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button className="text-white items-center">
      {theme === "light" ? (
        <MdDarkMode onClick={toggleTheme} className="text-black text-3xl" />
      ) : (
        <MdLightMode onClick={toggleTheme} className="text-white text-3xl" />
      )}
    </button>
  );
};
