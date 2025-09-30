import { pool } from "../config/db.js";

export const getAllUsersHandler = async (req, res) => {
  try {
    const [users] = await pool.query(
      "SELECT id, fullname, username, email, role, address, phone_number, age FROM users"
    );

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUsersByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const [users] = await pool.query(
      "SELECT id, fullname, username, email, role, address, phone_number, age FROM users WHERE id = ?",
      [id]
    );

    if (users.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addUserHandler = async (req, res) => {
  const { fullname, username, email, password, role } = req.body;

  function validate(v) {
    if (!v || v.trim() === "") {
      return res.status(400).json({
        status: "error",
        message: `A field is missing`,
      });
    }
  }

  validate(fullname);
  validate(username);
  validate(email);
  validate(password);
  validate(role);

  try {
    const [users] = await pool.query(
      "INSERT INTO users (fullname, username, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [fullname, username, email, password, role]
    );

    const newUser = {
      id: users.insertId,
      fullname,
      username,
      email,
      role,
    };

    console.log("New user created:", newUser);
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
