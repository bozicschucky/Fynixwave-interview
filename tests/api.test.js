const app = require("../app");
const supertest = require("supertest");

test("GET /users", () => {
  supertest(app)
    .get("/users")
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe("success");
      expect(response.body.data).toBe({});
    });
});

test("should test registering a user", () => {
  const user = {
    name: "joel",
    group: "muk",
    loan: 100000,
    id: 2,
  };
  supertest(app)
    .post("/add-user")
    .send(user)
    .expect(200)
    .then((response) => {
      expect(response.body.message)
        .toBe("user added successfully")
        .end(function (err, res) {
          if (err) return done(err);
          return done();
        });
    });
});
