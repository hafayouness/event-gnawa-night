import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./config/database.js";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes.js";
import artistRoutes from "./routes/artistRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api/events", eventRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
// app.listen(PORT, async () => {
//   await testConnection();
//   console.log(`🚀 Serveur démarré sur  http://192.168.68.107:${PORT}`);
// });
app.listen(PORT, "0.0.0.0", async () => {
  await testConnection();
  console.log(`🚀 Serveur démarré sur http://192.168.1.113:${PORT}`);
});
