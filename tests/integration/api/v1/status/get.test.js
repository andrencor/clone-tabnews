test("GET /api/v1/status", async () => {
  let response = await fetch("http://127.0.0.1:3000/api/v1/status");
  let responseBody = await response.json();

  expect(response.status).toBe(200);

  let parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(parsedUpdatedAt).toEqual(responseBody.updated_at);

  expect(responseBody.dependencies.database.version).toEqual("16.0");

  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
