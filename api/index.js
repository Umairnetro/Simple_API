const express = require("express");
const app = express();

const data = require("./data/info.json");

app.get("/", (req, res) => {
  res.send({
    Message:
      "Welcome To SIMPLE APIWell, well, well... look who came knocking! 🚪 Welcome to our API!",
    Data: "Data not found here! But psst... /api/netrocode is where we keep the good stuff 🤫",
  });
});

app.post("/api/netrocode", (req, res) => {
  res.send({
    Message: "here you are my friend",
    data,
  });
});

app.listen(3000, () => {
  console.log("app listening to PORT 3000");
  console.log(data);
});

module.exports = app;
