import express from "express";
import { getAllUsers, getUser, registerUserController, loginUserController, getUserComments } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/", getAllUsers);
router.get("/id/:id", getUser);
router.get("/comments/id/:id",  getUserComments);

export default router;
