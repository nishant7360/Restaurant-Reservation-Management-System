import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import Table from "../models/table.model.js";

export const createTable = asyncHandler(async (req, res) => {
  const { tableNumber, capacity } = req.body;
  if (!tableNumber || !capacity) {
    throw new ApiError(400, "Table number and capacity are required");
  }
  const table = await Table.findOne({ tableNumber });

  if (table) {
    throw new ApiError(400, "This table number already exists");
  }

  const newTable = await Table.create({ tableNumber, capacity });

  return res
    .status(201)
    .json(new ApiResponse(201, newTable, "Table created successfully"));
});

export const getAllTables = asyncHandler(async (req, res) => {
  const tables = await Table.find();
  return res
    .status(201)
    .json(new ApiResponse(200, tables, "Tables fetched successfully"));
});

export const updateTable = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { capacity, isActive } = req.body;

  const table = await Table.findById(id);

  if (!table) {
    throw new ApiError(404, "No Table found");
  }

  table.capacity = capacity;
  table.isActive = isActive;
  await table.save();

  return res
    .status(201)
    .json(new ApiResponse(200, table, "Table updated successfully"));
});

export const deleteTable = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await Table.findByIdAndDelete(id);

  return res
    .status(201)
    .json(new ApiResponse(200, {}, "Table deleted successfully"));
});
