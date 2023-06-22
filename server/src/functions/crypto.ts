import crypto from "crypto";

const hash = (username: String, password: String): string => {
  const combinedString = `${username}-${password}`;
  const hash = crypto.createHash("sha256").update(combinedString).digest("hex");
  const uniqueId = hash;
  return uniqueId;
};
export { hash };
