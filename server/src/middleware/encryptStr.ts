import { Request, Response } from "express";
import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = Buffer.from(
  "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "hex"
);
function encryptString_AES(input: string): string {
  const iv = crypto.randomBytes(16); // Generate a random IV (Initialization Vector)
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(input, "utf8", "hex");
  encrypted += cipher.final("hex");
  const encryptedValue = iv.toString("hex") + encrypted; // Prepend IV to the encrypted value
  return encryptedValue;
}

export const encryptGet = async (req: Request, res: Response) => {
  const { str } = req.params;
  const encryptedValue = encryptString_AES(str);
  res.status(200).json({ encrypt: encryptedValue });
};
