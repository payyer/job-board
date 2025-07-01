import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
export const env = createEnv({
    server: {
        DB_PASSWORD: z.string().min(1),
        DB_USER: z.string().min(1),
        DB_HOST: z.string().min(1),
        DB_PORT: z.string().min(1),
        DB_NAME: z.string().min(1),
        DB_CA: z.string().min(1),
        DB_SSL: z.string().min(1),
        CLERK_SECRET_KEY: z.string().min(1),
    },
    createFinalSchema: env => {
        return z.object(env).transform((value) => {
            const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DB_CA, DB_SSL } = value

            return {
                ...value,
                DATABASE_URL: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=no-verify`
            }
        })
    },
    experimental__runtimeEnv: process.env,
    emptyStringAsUndefined: true,
})