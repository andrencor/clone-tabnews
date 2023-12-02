import database from "../../../../infra/database.js";

async function status(req, res) {
  let result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  res.status(200).json({ status: "testando utf são é à" });
}

export default status;
