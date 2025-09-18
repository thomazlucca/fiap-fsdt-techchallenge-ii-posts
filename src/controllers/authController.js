import * as authService from "../services/authService.js";

export const register = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ id: user._id, username: user.username });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const token = await authService.loginUser(req.body);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
