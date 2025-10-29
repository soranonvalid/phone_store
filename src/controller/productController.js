import * as productService from "../services/productServices.js";

export const getAllProductsHandler = async (req, res, next) => {
  try {
    const response = await productService.getAllProduct();

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllProductsByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productService.getAllByIdProduct(id);

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

export const createProductHandler = async (req, res, next) => {
  try {
    const response = await productService.createProduct(req.body);

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};
