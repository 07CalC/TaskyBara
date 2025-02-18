import { auth } from "@/auth";
import { drizzle } from "drizzle-orm/node-postgres";


export default async function Home() {
  const session = await auth()

  return (

    <div className="bg-blue-500 p-4">
      <h1>Home</h1>
    </div>
  );
}