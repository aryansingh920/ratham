import { home } from "../middleware/home";
import { login } from "../middleware/login";
import { encrypt } from "../middleware/encrypt";
import { decrypt } from "../middleware/decrypt";

export const home_get = home;
export const login_post = login;
export const encrypt_get = encrypt;
export const decrypt_get = decrypt;
