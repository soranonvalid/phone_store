import express from "express";
import { registerHandler } from "../controller/authController.js";
const authRouter = express.Router();

authRouter.post("/register", registerHandler);
export default authRouter;
