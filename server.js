import config from "./config";
import app from "./api/app";

const port = config.port;

// const secret = require("crypto").randomBytes(20).toString("hex");

// console.log(secret);

app.listen(port, () => {
  console.log(`Server is up and running`);
});
