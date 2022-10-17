import env from "dotenv";

env.config();

export default {
  port: process.env.PORT,
};
