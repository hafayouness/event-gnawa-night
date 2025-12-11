import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

import defineArtist from "../models/Artist.js";
import defineBooking from "../models/Booking.js";
import defineEventInfo from "../models/EventInfo.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: true,
  }
);

// Définir les modèles
const Artist = defineArtist(sequelize);
const Booking = defineBooking(sequelize);
const EventInfo = defineEventInfo(sequelize);

// Définir les relations
Artist.hasMany(Booking, { foreignKey: "artist_id", as: "bookings" });
Booking.belongsTo(Artist, { foreignKey: "artist_id", as: "artist" });

EventInfo.hasMany(Booking, { foreignKey: "event_id", as: "bookings" });
Booking.belongsTo(EventInfo, { foreignKey: "event_id", as: "event" });

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("✅ Connexion et tables synchronisées !");
  } catch (error) {
    console.error("❌ Erreur DB :", error.message);
    process.exit(1);
  }
};

export default sequelize;
export { testConnection, Artist, Booking, EventInfo };
