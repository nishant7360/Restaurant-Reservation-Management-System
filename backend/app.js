import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import errorHandler from "./middlewares/error.middleware.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/v1", userRouter);

app.use(errorHandler);

export default app;
