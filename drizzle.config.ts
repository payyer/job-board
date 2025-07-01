import { env } from '@/app/data/env/server';
import { defineConfig } from 'drizzle-kit';
// import fs from "fs";
export default defineConfig({
    out: './src/drizzle/migrations',
    schema: './src/drizzle/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: env.DATABASE_URL,
        // ssl: { ca: fs.readFileSync(env.DB_CA!).toString() },
    },
});
