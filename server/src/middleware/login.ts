import { Request, Response } from "express";
import { Interface } from "../Interface/interface";
import { hash } from "../functions/crypto";
import { User } from "../controllers/schemas";

export const login = async (req: Request, res: Response) => {
  const { universityId, password }: Interface = req.body;
  const token = hash(universityId, password);

  const user = await User.findOne({ userId: universityId })
    .then((r) => (r ? true : false))
    .catch((e) => false);

  console.log(user);

  res.setHeader("Authorization", `Bearer ${token}`);
  res.status(200).json({ token: token });
};
