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
    client.release();
  }
};

const transaction = async (text: string, params: any[]) => {
  const client = await connectionPool.connect();

  try {
    await client.query("BEGIN");
    const queryText = "INSERT INTO users(name) VALUES($1) RETURNING id";
    const res = await client.query(queryText, ["brianc"]);

    const insertPhotoText = "INSERT INTO photos(user_id, photo_url) VALUES ($1, $2)";
    const insertPhotoValues = [res.rows[0].id, "s3.bucket.foo"];
    await client.query(insertPhotoText, insertPhotoValues);
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

export { connect, query };
