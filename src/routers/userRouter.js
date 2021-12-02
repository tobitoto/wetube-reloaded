import express from "express";
import { join, edit, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/remove", remove);
userRouter.get("/edit", edit);
userRouter.get(":id", ServiceWorkerRegistration);

export default userRouter;
