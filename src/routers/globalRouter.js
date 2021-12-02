import express from "express";
import { join, login, logout, see } from "../controllers/userController";
import {
  trending,
  search,
  upload,
  deleteVideo,
} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
