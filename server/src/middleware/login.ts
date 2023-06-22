import { Request, Response } from "express";
import { Interface } from "../Interface/interface";

export const login = async (req: Request, res: Response) => {
  const { universityId, password }: Interface = req.body;
  console.log(universityId);
  res.status(200).json({ msg: "Hello World" });
};
