import express from "express";
import { testConnection } from "./config/db.js";
import usersRouter from "./routes/usersRouter.js";
import productRouter from "./routes/productsRouter.js";
import cors from "cors";
import errorMiddleware from "./middlewares/errorMiddlewares.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/products", productRouter);
app.use(errorMiddleware);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  testConnection();
});
