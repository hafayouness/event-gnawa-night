import express from "express";
import {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist,
} from "../controllers/ArtistController.js";

const router = express.Router();

router.get("/", getAllArtists);
router.get("/:id", getArtistById);

router.post("/", createArtist);
router.put("/:id", updateArtist);
router.delete("/:id", deleteArtist);

export default router;
