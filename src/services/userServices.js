import { pool } from "../config/db.js";
import { ResponseError } from "../errors/responseError.js";
import { createUserScheme } from "../validations/userValidation.js";
import validate from "../validations/validate.js";

export const getAllProducts = async () => {
  const [products] = await pool.query("SELECT * FROM products");

  return products;
};

export const getAllByIdProducts = async (id) => {
  const [users] = await pool.query("SELECT * FROM products WHERE id=?", [id]);

  if (users.length == 0) {
    throw new ResponseError(404, "Products not found.");
  }

  return users[0];
};

export const createUser = async (request) => {
  const user = validate(createUserScheme, request);
  try {
    const [result] = await pool.query(
      "INSERT INTO users (fullname, username, email, password, role, address, phone_number, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.fullname,
        user.username,
        user.email,
        user.password,
        user.role,
        user.address ? user.address : null,
        user.phone_number ? user.phone_number : null,
        user.age ? user.age : null,
      ]
    );
  } catch (error) {
    throw new ResponseError(500, "failed creating a user");
  }
};
