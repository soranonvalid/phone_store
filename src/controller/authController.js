import * as authService from "../services/authServices.js";

export const registerHandler = async (req, res, next) => {
  try {
    const response = await authService.register(req.body);

    res.status(201).json({
      status: "success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};
