import express from "express";
import {
  getAllProductsHandler,
  getProductsByIdHandler,
  addProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "../handlers/productHandler.js";

const productRouter = express.Router();

productRouter.get("/", getAllProductsHandler);
productRouter.get("/:id", getProductsByIdHandler);
productRouter.post("/", addProductHandler);
productRouter.put("/:id", updateProductHandler);
productRouter.delete("/:id", deleteProductHandler);
export default productRouter;
