import { Pool } from "pg";

const connectionPool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const connect = async () => {
  try {
    const client = await connectionPool.connect();
    return client;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

const query = async (text: string, params: any[]) => {
  const client = await connect();
  try {
    const result = await client.query(text, params);
    return result;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    client.release(); // Release the connection back to the pool
  }
};

export { connect, query };
