import express from "express";
const router = express.Router();

import { registerUser, userLogin } from "../controllers/users.controllers.js";

router.route("/register").post(registerUser);
router.route("/login").post(userLogin);

export default router;
