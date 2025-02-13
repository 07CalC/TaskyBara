import { auth } from "@/auth";
import { accounts, authenticators, sessions, users } from "@/db/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq, sql } from "drizzle-orm";
// import { Button } from "./Components/Button";


export default async function Home() {
  const db = drizzle(process.env.DATABASE_URL!);
  const session = await auth()
  // await db.delete(users)
  // const user = await db.select().from(users).where(sql`id = ${session?.user?.id}`)
  // console.log(await db.select().from(users))
  console.log(session?.user);

  return (

    <div className="bg-blue-500 p-4">
      <h1>Home</h1>
    </div>
  );
}