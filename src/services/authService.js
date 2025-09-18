import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const registerUser = async ({ username, password }) => {
  const user = new User({ username, password });
  await user.save();
  return user;
};

export const loginUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error("Usuário não encontrado");
  const isValid = await user.comparePassword(password);
  if (!isValid) throw new Error("Senha incorreta");

  // Gerar JWT
  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return token;
};
