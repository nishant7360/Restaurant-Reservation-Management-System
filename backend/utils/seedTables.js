import { configDotenv } from "dotenv";
configDotenv({ path: ".env" });

import mongoose from "mongoose";
import Table from "../models/table.model.js";

const tables = [
  { tableNumber: 1, capacity: 2 },
  { tableNumber: 2, capacity: 2 },
  { tableNumber: 3, capacity: 4 },
  { tableNumber: 4, capacity: 4 },
  { tableNumber: 5, capacity: 6 },
  { tableNumber: 6, capacity: 6 },
  { tableNumber: 7, capacity: 8 },
  { tableNumber: 8, capacity: 10 },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("DB connected successfully");

    await Table.deleteMany();

    await Table.insertMany(tables);

    console.log("Tables seeded successfully");

    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
