// 방법1
// node_modules안에 있는 "express"를 express라고 지정해서 import
import express from "express";
// 방법 2
//const express = require("express");
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const morganLogger = morgan("dev");

// -------------------------------------------
// 라우터를 쓰도록 설정
app.use(morganLogger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// next 함수를 호출하기 위한 middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

const handleListening = () => {
  console.log(`Server listening on port localhost:${PORT}`);
};

// 몇번 port 들을 건지 설정
app.listen(PORT, handleListening);
