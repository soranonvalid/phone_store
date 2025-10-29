import { pool } from "../config/db.js";
import { ResponseError } from "../errors/responseError.js";
import { createProductScheme } from "../validations/productValidation.js";
import validate from "../validations/validate.js";

export const getAllProduct = async () => {
  const [products] = await pool.query("select * FROM products");

  console.log(products);

  return products;
};

export const getAllByIdProduct = async (id) => {
  const [users] = await pool.query("select * FROM products WHERE id=?", [id]);

  if (users.length == 0) {
    throw new ResponseError(404, "product not found.");
  }

  return users[0];
};

export const createProduct = async (request) => {
  const product = validate(createProductScheme, request);
  try {
    const [result] = await pool.query(
      "INSERT INTO products (user_id, name, description, price, stock) VALUES (?, ?, ?, ?, ?)",

      [
        product.user_id,
        product.name,
        product.description,
        product.price,
        product.stock,
      ]
    );
  } catch (error) {
    throw new ResponseError(500, "failed creating a product");
  }
};
