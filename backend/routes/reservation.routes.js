import express from "express";
import {
  cancelMyReservation,
  cancelReservation,
  completeReservation,
  getAllReservations,
  myReservations,
  reserveTable,
  updateReservation,
} from "../controllers/reservation.controller.js";
import protect from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/reserve-table", protect, reserveTable);
router.get("/my", protect, myReservations);
router.patch("/my/:id/cancel", protect, cancelMyReservation);

router.get("/", protect, authorize("admin"), getAllReservations);
router.patch("/cancel/:id", protect, authorize("admin"), cancelReservation);
router.patch("/:id", protect, authorize("admin"), updateReservation);
router.patch("/:id/complete", protect, authorize("admin"), completeReservation);
export default router;
