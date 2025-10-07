import express from "express";
import { testConnection } from "./config/db.js";
import usersRouter from "./routes/usersRouter.js";
import productRouter from "./routes/productsRouter.js";

const app = express();

app.use(express.json());
app.use("/users", usersRouter);
app.use("/products", productRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  testConnection();
});
