import express from "express";
import {
  getAllUsersHandler,
  getUsersByIdHandler,
  addUserHandler,
  updateUsersHandler,
  deleteUserByIdHandler,
} from "../handlers/userHandler.js";

const usersRouter = express.Router();

usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/:id", getUsersByIdHandler);
usersRouter.post("/", addUserHandler);
usersRouter.put("/:id", updateUsersHandler);
usersRouter.delete("/:id", deleteUserByIdHandler);
export default usersRouter;
