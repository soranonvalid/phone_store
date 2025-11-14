import { pool } from "../config/db.js";
import { ResponseError } from "../errors/responseError.js";
import { createUserScheme } from "../validations/userValidation.js";
import validate from "../validations/validate.js";
import bcrypt from "bcrypt";

export const getAllUser = async () => {
  const [products] = await pool.query(
    "SELECT id, fullname, username, email, role, address, phone_number, age FROM users"
  );

  return products;
};

export const getAllByIdUser = async (id) => {
  const [users] = await pool.query(
    "SELECT id, fullname, username, email, role, address, phone_number, age FROM users WHERE id=?",
    [id]
  );

  if (users.length == 0) {
    throw new ResponseError(404, "Products not found.");
  }

  return users[0];
};

export const createUser = async (request) => {
  const user = validate(createUserScheme, request);
  const hashedPassword = await bcrypt.hash(user.password, 10);
  try {
    const [result] = await pool.query(
      "INSERT INTO users (fullname, username, email, password, role, address, phone_number, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.fullname,
        user.username,
        user.email,
        hashedPassword,
        user.role,
        user.address ? user.address : null,
        user.phone_number ? user.phone_number : null,
        user.age ? user.age : null,
      ]
    );
  } catch (error) {
    throw new ResponseError(400, "failed creating a user");
  }
};

export const updateUser = async (id, request) => {
  const validated = validate(createUserScheme, request);
  const {
    fullname,
    username,
    email,
    password,
    role,
    address,
    phone_number,
    age,
  } = validated;

  const [result] = await pool.query(
    "UPDATE users SET fullname=?, username=?, email=?, password=?, role=?, address=?, phone_number=?, age=? WHERE id = ?",
    [fullname, username, email, password, role, address, phone_number, age, id]
  );

  if (result.affectedRows === 0) {
    throw new ResponseError(404, "User not found");
  }

  const [userUpdate] = await pool.query(
    "SELECT users SET fullname=?, username=?, email=?, password=?, role=?, address=?, phone_number=?, age=? WHERE id = ?",
    [fullname, username, email, role, address, phone_number, age, id]
  );

  return userUpdate[0];
};
