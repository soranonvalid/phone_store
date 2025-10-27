import * as userService from "../services/userServices.js";

export const getAllUserHandler = async (req, res, next) => {
  try {
    const response = await userService.getAllUser();

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllUserByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.getAllByIdUser(id);

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

export const createUserHandler = async (req, res, next) => {
  try {
    const response = await userService.createUser(req.body);

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};
