import { Booking, EventInfo, Artist } from "../config/database.js";

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

export const updateBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    Object.assign(booking, req.body);
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
