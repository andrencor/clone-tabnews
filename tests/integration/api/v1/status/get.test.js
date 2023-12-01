test("GET /api/v1/status (Expected: 200)", async () => {
  let response = await fetch("http://127.0.0.1:3000/api/v1/status");
  expect(response.status).toBe(200);
});
