const express = require("express");
const app = express();
const port = 3000;
const users = {};

// parse application/json
app.use(express.json());
// app.use(express.urlencoded());

app.post("/add-user", (req, res) => {
  const username = req.body["name"];
  const group = req.body["group"];
  console.log("the user name -->", username);
  res.status(200).send("Hello World!");
});
// app.post("/add/user", (req, res) => {
// //   res.send("Hello World!");
// // });
app.get("/users", (req, res) => {
  const users = {
    jake: {
      groupid: "groupx",
    },
    joe: {
      groupid: "2020",
    },
  };
  res.status(200).json({
    data: users,
    status: "success",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
