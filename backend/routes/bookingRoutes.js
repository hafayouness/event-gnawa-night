import express from "express";
import {
  createBooking,
  getBookingById,
  getBookingByCode,
  // getBookingsByEmail,
  updateBooking,
  deleteBooking,
} from "../controllers/BookingController.js";

const router = express.Router();

router.get("/:id", getBookingById);
router.get("/code/:code", getBookingByCode);
// router.get("/email/:email", getBookingsByEmail);

router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

export default router;
