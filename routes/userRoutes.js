import express from "express";
import {
  userInfo,
  userlogincontrol,
  userRegisterControl,
} from "../controllers/userController.js";

import { authorizer } from "../middleware/middleware.js";

const router = express.Router();

router.post("/register", userRegisterControl);
router.post("/login", userlogincontrol);
router.get("/user", authorizer, userInfo);
export default router;
