import express from "express";
import {
  updateProductHandler,
  deleteProductHandler,
} from "../handlers/productHandler.js";

import {
  getAllProductsHandler,
  getAllProductsByIdHandler,
  createProductHandler,
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/", getAllProductsHandler);
productRouter.get("/:id", getAllProductsByIdHandler);
productRouter.post("/", createProductHandler);
productRouter.put("/:id", updateProductHandler);
productRouter.delete("/:id", deleteProductHandler);
export default productRouter;
