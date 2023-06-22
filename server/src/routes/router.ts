import { Request, Response, NextFunction, Router } from "express";
import {
  home_get,
  login_post,
  encrypt_get,
  decrypt_get,
} from "../controllers/middleware";

const router = Router();

const checkAccessToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({ error: "Access token missing" });
  }

  const token: String = accessToken.split(" ")[1];
  const BearerString: String = accessToken.split(" ")[0];

  if (BearerString === "Bearer") {
    next();
  } else {
    return res.status(401).json({ error: "Invalid access token" });
  }
};

router
  .get("/", checkAccessToken, home_get)
  .get("/encrypt/:str", encrypt_get)
  .get("/decrypt/:str", decrypt_get)
  .post("/login/student", login_post);

export default router;
