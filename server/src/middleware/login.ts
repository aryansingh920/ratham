import { Request, Response } from "express";
import { Interface } from "../Interface/interface";
import hash from "../functions/crypto";

export const login = async (req: Request, res: Response) => {
  const { universityId, password }: Interface = req.body;
  console.log(hash(universityId, password));
  res.status(200).json({ msg: "Hello World" });
};
