import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  userById,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", userById);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
