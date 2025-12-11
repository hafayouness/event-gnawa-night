import { Booking, EventInfo, Artist } from "../models/index.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    return res
      .status(201)
      .json({ message: "Booking created successfully", booking });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id, {
      include: [
        { model: EventInfo, as: "event" },
        { model: Artist, as: "artist" },
      ],
    });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    return res.status(200).json({ booking });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getBookingByCode = async (req, res) => {
  const { code } = req.params;
  try {
    const booking = await Booking.findOne({
      where: { confirmation_code: code },
      include: [
        { model: EventInfo, as: "event" },
        { model: Artist, as: "artist" },
      ],
    });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    return res.status(200).json({ booking });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getBookingsByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const bookings = await Booking.findAll({
      where: { email },
      include: [
        { model: EventInfo, as: "event" },
        { model: Artist, as: "artist" },
      ],
    });
    return res.status(200).json({ bookings });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const updateBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    Object.keys(req.body).forEach((key) => {
      booking[key] = req.body[key];
    });

    await booking.save();
    return res
      .status(200)
      .json({ message: "Booking updated successfully", booking });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    await booking.destroy();
    return res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
