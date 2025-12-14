import { Artist, Booking } from "../config/database.js";

export const createArtist = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing" });
  }

  const { name, bio, photo_url } = req.body;
  console.log("Body reçu:", req.body);

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Artist name is required" });
  }

  try {
    const artist = await Artist.create({
      name: name.trim(),
      bio,
      photo_url,
    });

    return res
      .status(201)
      .json({ message: "Artist created successfully", artist });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll({
      include: [{ model: Booking, as: "bookings" }],
    });
    return res.status(200).json({ artists });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getArtistById = async (req, res) => {
  const { id } = req.params;
  try {
    const artist = await Artist.findByPk(id, {
      include: [{ model: Booking, as: "bookings" }],
    });
    if (!artist) return res.status(404).json({ message: "Artist not found" });
    return res.status(200).json({ artist });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const updateArtist = async (req, res) => {
  const { id } = req.params;
  try {
    const artist = await Artist.findByPk(id);
    if (!artist) return res.status(404).json({ message: "Artist not found" });

    Object.assign(artist, req.body);
    await artist.save();

    return res
      .status(200)
      .json({ message: "Artist updated successfully", artist });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  const { id } = req.params;
  try {
    const artist = await Artist.findByPk(id);
    if (!artist) return res.status(404).json({ message: "Artist not found" });

    await artist.destroy();
    return res.status(200).json({ message: "Artist deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
