import { EventInfo, Booking } from "../models/index.js"; // ou le chemin correct vers tes modèles

export const createEvent = async (req, res) => {
  try {
    const event = await EventInfo.create(req.body);
    return res
      .status(201)
      .json({ message: "Event created successfully", event });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await EventInfo.findAll({
      include: [{ model: Booking, as: "bookings" }],
    });
    return res.status(200).json({ events });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await EventInfo.findByPk(id, {
      include: [{ model: Booking, as: "bookings" }],
    });
    if (!event) return res.status(404).json({ message: "Event not found" });
    return res.status(200).json({ event });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await EventInfo.findByPk(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    Object.keys(req.body).forEach((key) => {
      event[key] = req.body[key];
    });

    await event.save();
    return res
      .status(200)
      .json({ message: "Event updated successfully", event });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await EventInfo.findByPk(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    await event.destroy();
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
