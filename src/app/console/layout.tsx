import { SideBar } from "@/components/SideBar";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
          <div className="min-w-screen w-full h-full min-h-screen flex">
            <div className="fixed flex sm:w-1/5 h-screen">
                <SideBar />
            </div>
            <div className="sm:w-1/5 hidden sm:flex h-screen">
            </div>
            <div className="dark:bg-secondaryDark bg-primaryLight w-full sm:w-4/5">
                {children}
            </div>
        </div>
    );
  }