import express from "express";
import config from "./config";

const app = express();

const port = config.port;

app.listen(port, () => {
  console.log(`Server is up and running`);
});
