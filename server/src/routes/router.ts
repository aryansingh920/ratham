import { Router } from "express";
import { home_get, login_post } from "../controllers/middleware";

const router = Router();
router.get("/", home_get).post("/login/student", login_post);

export default router;
