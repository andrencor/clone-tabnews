import database from "infra/database.js";

async function status(req, res) {
  let updatedAt = new Date().toISOString();

  let dbMaxConnections = await database.query("SHOW max_connections;");
  dbMaxConnections = dbMaxConnections.rows[0].max_connections;

  let dbOpenedConnections = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [process.env.POSTGRES_DB],
  });
  dbOpenedConnections = dbOpenedConnections.rows[0].count;

  let dbVersion = await database.query("SHOW server_version;");
  dbVersion = dbVersion.rows[0].server_version;

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: parseInt(dbMaxConnections),
        opened_connections: dbOpenedConnections,
        version: dbVersion,
      },
    },
  });
}

export default status;
