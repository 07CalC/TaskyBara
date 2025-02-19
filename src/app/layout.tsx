import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "TaskyBara",
  description: "Manage your projects and tasks efficiently",
  icons: {
    icon: "/taskybaralogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <Toaster position="bottom-left" />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
