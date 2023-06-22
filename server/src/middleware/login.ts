import { Request, Response } from "express";
import { Interface } from "../Interface/interface";
import { hash } from "../functions/crypto";

export const login = async (req: Request, res: Response) => {
  const { universityId, password }: Interface = req.body;
  const token = hash(universityId, password);
  res.setHeader("Authorization", `Bearer ${token}`);
  res.status(200).json({ token: token });
};
