const aws = require("aws-sdk");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  let meta = new aws.MetadataService();
  let instanceId;
  meta.request("/latest/meta-data/instance-id", function (err, data) {
    instanceId = data;
  });
  return res.json({
    status: "ok",
    instanceId: instanceId || null,
  });
});

app.post("/test", (req, res) => {
  const { name, date } = req.body;

  res.json({ name, date });
});

app.listen(3333);
