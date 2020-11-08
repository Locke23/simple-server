const aws = require("aws-sdk");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  var meta = new aws.MetadataService();

  meta.request("/latest/meta-data/instance-id", function (err, data) {
    console.log(data);
  });
  return res.send(`<html><body>${`servidor ta up`}</body></html>`);
});

app.post("/test", (req, res) => {
  const { name, date } = req.body;

  res.json({ name, date });
});

app.listen(3333);
