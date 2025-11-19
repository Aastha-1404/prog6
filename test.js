const request = require("supertest");
const app = require("./app");

describe("API Tests", () => {
  it("Test root endpoint", (done) => {
    request(app).get("/")
      .expect(200, done);
  });
});

