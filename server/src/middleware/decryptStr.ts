import { Request, Response } from "express";
import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.key, "hex");

function decryptString_AES(encrypted: string): string {
  const iv = Buffer.from(encrypted.slice(0, 32), "hex"); // Extract IV from the encrypted value
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted.slice(32), "hex", "utf8"); // Remove IV from the encrypted value
  decrypted += decipher.final("utf8");
  return decrypted;
}

export const decryptGet = async (req: Request, res: Response) => {
  const { str } = req.params;
  const encryptedValue = decryptString_AES(str);
  res.status(200).json({ encrypt: encryptedValue });
};
