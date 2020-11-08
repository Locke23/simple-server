const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "server is up" });
});

app.post("/test", (req, res) => {
  const { name, date } = req.body;

  res.json({ name, date });
});

app.listen(3333);
