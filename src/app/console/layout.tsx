import { SideBar } from "@/components/SideBar";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
        >
          <div className="w-screen h-full min-h-screen flex">
            <div className="fixed bg-secondaryLight dark:bg-primaryDark w-1/5 h-screen">
                <SideBar />
            </div>
            <div className="w-1/5 h-screen">
            </div>
            <div className="dark:bg-secondaryDark bg-primaryLight w-4/5">
                {children}
            </div>
        </div>
        </body>
      </html>
    );
  }