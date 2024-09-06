import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
    dialect: 'postgresql',
    schema: './server/db/schema.ts',
    out: './server/db/migrations',
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    }
})
