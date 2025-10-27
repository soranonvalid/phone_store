import express from "express";
import {
  updateUsersHandler,
  deleteUserByIdHandler,
} from "../handlers/userHandler.js";

import {
  getAllUserHandler,
  getAllUserByIdHandler,
  createUserHandler,
} from "../controller/userController.js";

const usersRouter = express.Router();

usersRouter.get("/", getAllUserHandler);
usersRouter.get("/:id", getAllUserByIdHandler);
usersRouter.post("/", createUserHandler);
usersRouter.put("/:id", updateUsersHandler);
usersRouter.delete("/:id", deleteUserByIdHandler);
export default usersRouter;
