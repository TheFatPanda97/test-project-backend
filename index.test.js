const app = require('./server');
const supertest = require("supertest");

describe("endpoint tests", () => {
  it("endpoint /", async () => {
    const res = await supertest(app).get("/").expect(200);
    expect(res.text).toBe("bye world");
  })

  it("endpoint /test", async () => {
    const res = await supertest(app).get("/test").expect(200);
    expect(res.body).toEqual({res: "this is a test result"});
  })
})