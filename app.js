const express = require("express");
const bodyParser = require("body-parser");

const projectRouter = require("./routers/projectRouter");
const AppError = require("./utils/appError");

const app = express();
app.use(bodyParser.json());

//need to implement some security middleware

app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/project", projectRouter);

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Need to implement global error handler

module.exports = app;
