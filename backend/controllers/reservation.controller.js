import Reservation from "../models/reservation.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import Table from "../models/table.model.js";

export const reserveTable = asyncHandler(async (req, res) => {
  const { reservationDate, startTime, endTime, guests } = req.body;

  if (!reservationDate || !startTime || !endTime || !guests) {
    throw new ApiError(400, "All fields are required");
  }

  if (startTime >= endTime) {
    throw new ApiError(400, "End time must be after start time");
  }

  if (guests <= 0) {
    throw new ApiError(400, "Guests must be greater than 0");
  }

  if (new Date(reservationDate) < new Date().setHours(0, 0, 0, 0)) {
    throw new ApiError(400, "Reservation date cannot be in the past");
  }

  const tables = await Table.find({
    isActive: true,
    capacity: { $gte: guests },
  }).sort({ capacity: 1 });

  if (!tables.length) {
    throw new ApiError(
      404,
      "No table available for the requested number of guests",
    );
  }

  let assignedTable = null;

  for (const table of tables) {
    const conflict = await Reservation.findOne({
      table: table._id,
      reservationDate: new Date(reservationDate),
      status: "Booked",

      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
    });

    if (!conflict) {
      assignedTable = table;
      break;
    }
  }

  if (!assignedTable) {
    throw new ApiError(400, "No tables available for the selected time slot");
  }
  const reservation = await Reservation.create({
    customer: req.user._id,
    table: assignedTable._id,
    reservationDate,
    startTime,
    endTime,
    guests,
  });
  const createdReservation = await Reservation.findById(reservation._id)
    .populate("customer", "name email")
    .populate("table", "tableNumber capacity");
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        createdReservation,
        "Reservation created successfully",
      ),
    );
});

export const myReservations = asyncHandler(async (req, res) => {
  const reservations = await Reservation.find({
    customer: req.user._id,
  })
    .populate("table", "tableNumber capacity")
    .sort({ reservationDate: 1, startTime: 1 });

  return res
    .status(201)
    .json(
      new ApiResponse(200, reservations, "Reservation fetched successfully"),
    );
});

export const cancelMyReservation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const reservation = await Reservation.findOne({
    _id: id,
    customer: req.user._id,
  });

  if (!reservation) {
    throw new ApiError(404, "No Reservation found");
  }
  if (reservation.status === "Cancelled") {
    throw new ApiError(400, "Reservation is already cancelled");
  }
  reservation.status = "Cancelled";
  await reservation.save();

  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Reservation cancelled successfully"));
});

export const getAllReservations = asyncHandler(async (req, res) => {
  const { date } = req.query;

  const filter = {};

  if (date) {
    filter.reservationDate = new Date(date);
  }

  const reservations = await Reservation.find(filter)
    .populate("customer", "name email")
    .populate("table", "tableNumber capacity")
    .sort({
      reservationDate: 1,
      startTime: 1,
    });

  return res
    .status(200)
    .json(
      new ApiResponse(200, reservations, "Reservations fetched successfully"),
    );
});

export const cancelReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (!reservation) {
    throw new ApiError(404, "No Reservation found");
  }
  if (reservation.status === "Cancelled") {
    throw new ApiError(400, "Reservation already cancelled");
  }
  reservation.status = "Cancelled";

  await reservation.save();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Reservation cancelled successfully"));
});

export const updateReservation = asyncHandler(async (req, res) => {
  const { reservationDate, startTime, endTime, guests } = req.body;
  const reservation = await Reservation.findById(req.params.id);

  if (!reservation) {
    throw new ApiError(404, "No Reservation found");
  }

  if (!reservationDate || !startTime || !endTime || !guests) {
    throw new ApiError(400, "All fields are required");
  }

  const tables = await Table.find({
    isActive: true,
    capacity: { $gte: guests },
  }).sort({ capacity: 1 });

  if (!tables.length) {
    throw new ApiError(
      404,
      "No table available for the requested number of guests",
    );
  }

  let assignedTable = null;

  for (const table of tables) {
    const conflict = await Reservation.findOne({
      _id: { $ne: reservation._id },
      table: table._id,
      reservationDate: new Date(reservationDate),
      status: "Booked",
      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
    });

    if (!conflict) {
      assignedTable = table;
      break;
    }
  }

  if (!assignedTable) {
    throw new ApiError(400, "No table available for the selected time slot");
  }

  reservation.table = assignedTable._id;
  reservation.reservationDate = reservationDate;
  reservation.startTime = startTime;
  reservation.endTime = endTime;
  reservation.guests = guests;

  await reservation.save();

  const updatedReservation = await Reservation.findById(reservation._id)
    .populate("customer", "name email")
    .populate("table", "tableNumber capacity");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedReservation,
        "Reservation updated successfully",
      ),
    );
});

export const completeReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (!reservation) {
    throw new ApiError(404, "Reservation not found");
  }

  if (reservation.status === "Cancelled") {
    throw new ApiError(400, "Cancelled reservation cannot be completed");
  }

  if (reservation.status === "Completed") {
    throw new ApiError(400, "Reservation already completed");
  }

  reservation.status = "Completed";
  await reservation.save();

  return res
    .status(200)
    .json(new ApiResponse(200, reservation, "Reservation marked as completed"));
});
