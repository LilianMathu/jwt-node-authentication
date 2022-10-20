import config from "./config";
import app from "./api/app";

const port = config.port;

app.listen(port, () => {
  console.log(`Server is up and running`);
});
