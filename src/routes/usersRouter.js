import express from "express";
import {
  getAllUsersHandler,
  getUsersByIdHandler,
  addUserHandler,
} from "../handlers/userHandler.js";

const usersRouter = express.Router();

usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/:id", getUsersByIdHandler);
usersRouter.post("/", addUserHandler);

export default usersRouter;
