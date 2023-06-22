import crypto from "crypto";

const hash = (username: String, password: String): string => {
  const combinedString = `${username}-${password}`;
  const hash = crypto.createHash("sha256").update(combinedString).digest("hex");
  const uniqueId = hash;
  return uniqueId;
};

const algorithm = "aes-256-cbc"; // Algorithm for encryption and decryption
const key = process.env.key; // Encryption key (should be kept secure)

// Function to encrypt a string
function encryptString_AES(input) {
  const cipher = crypto.createCipher(algorithm, key);
  let encrypted = cipher.update(input, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

// Function to decrypt a string
function decryptString_AES(encrypted) {
  const decipher = crypto.createDecipher(algorithm, key);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export default hash;
