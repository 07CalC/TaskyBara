import { auth } from "@/auth";
import { LoginButton } from "@/components/LoginButton";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth()
    if(session) redirect('/dashboard')
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <div className="bg-[#1E1E1E] p-8 rounded-2xl shadow-sm shadow-[#989797] max-w-sm text-center">
        <Image src="/taskybaralogo.png" width={100} height={100}  alt="Logo" className="w-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-4">Welcome to TaskyBara</h1>
        <LoginButton/>
      </div>
    </div>
  );
}