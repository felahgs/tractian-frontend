import express from "express";
import companyRoutes from "./routes/company";
import { errorHandler } from "./middlewares";

const app = express();
const port = 3030;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Health Check Ok!");
});

app.use("/company", companyRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
