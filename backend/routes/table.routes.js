import express from "express";
import protect from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import { getAllTables } from "../controllers/table.controller.js";
import {
  createTable,
  deleteTable,
  updateTable,
} from "../controllers/table.controller.js";

const router = express.Router();

router.get("/", protect, authorize("admin"), getAllTables);
router.post("/", protect, authorize("admin"), createTable);
router.delete("/delete/:id", protect, authorize("admin"), deleteTable);
router.patch("/update/:id", protect, authorize("admin"), updateTable);

export default router;
