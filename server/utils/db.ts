import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const runtimeConfig = useRuntimeConfig();

const pool = new pg.Pool({
    connectionString: runtimeConfig.databaseUrl,
});

export default drizzle(pool);
