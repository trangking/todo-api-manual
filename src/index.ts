import express from "express";
import router from "./router";
import { responseHandler } from "./view/respones";

const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use(responseHandler);

app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
