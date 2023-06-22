import { home } from "../middleware/home";
import { login } from "../middleware/login";
import { encryptGet } from "../middleware/encryptStr";
import { decryptGet } from "../middleware/decryptStr";

export const home_get = home;
export const login_post = login;
export const encrypt_get = encryptGet;
export const decrypt_get = decryptGet;
