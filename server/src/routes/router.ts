import { Request, Response, NextFunction, Router } from "express";
import * as Middleware from "../controllers/middleware";

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
  .get("/", checkAccessToken, Middleware.home)
  .get("/encrypt/:str", Middleware.encryptGet)
  .get("/decrypt/:str", Middleware.decryptGet)
  .post("/login/student", Middleware.login);

export default router;
