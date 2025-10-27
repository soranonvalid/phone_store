import { pool } from "../config/db.js";
import { ResponseError } from "../errors/responseError.js";

export const getAllUser = async () => {
  const [users] = await pool.query(
    "select id, fullname, username, email, role, address, phone_number, age FROM users"
  );

  return users;
};

export const getAllByIdUser = async (id) => {
  const [users] = await pool.query(
    "select id, fullname, username, email, role, address, phone_number, age FROM users WHERE id=?",
    [id]
  );

  if (users.length == 0) {
    throw new ResponseError(404, "user not found.");
  }

  return users[0];
};

export const createUser = async (user) => {
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
