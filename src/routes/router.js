const express = require('express');
const todoRouter = require("./todo.router");
const apiRouter = express();

apiRouter.use("/todo", todoRouter);

module.exports = apiRouter;