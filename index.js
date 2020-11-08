import { MetadataService } from "aws-sdk";
import express, { json } from "express";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  let meta = new MetadataService();
  try {
    meta.request("/latest/meta-data/instance-id", function (err, data) {
      return res.json({
        status: "ok",
        instanceId: data,
      });
    });
  } catch (err) {
    return res.json({ status: "ok", instanceId: "Nao foi possivel" });
  }
});

app.post("/test", (req, res) => {
  const { name, date } = req.body;

  res.json({ name, date });
});

app.listen(3333);
