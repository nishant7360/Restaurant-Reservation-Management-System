import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import errorHandler from "./middlewares/error.middleware.js";
import userRouter from "./routes/user.routes.js";
import reservationRouter from "./routes/reservation.routes.js";
import tableRouter from "./routes/table.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/v1", userRouter);
app.use("/api/v1/reservations", reservationRouter);
app.use("/api/v1/table", tableRouter);

app.use(errorHandler);

export default app;
