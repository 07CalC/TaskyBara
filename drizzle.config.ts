import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import {} from "@/db/index"

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
