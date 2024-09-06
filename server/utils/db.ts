import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const runtimeConfig = useRuntimeConfig();

const pool = new Pool({
    connectionString: runtimeConfig.databaseUrl,
});

export const db = drizzle(pool);
