import { Client } from "pg";

async function query(queryObject) {
  let client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  let result = await client.query(queryObject);
  await client.end();

  return result;
}

export default {
  query: query,
};
