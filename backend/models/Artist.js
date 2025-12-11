import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Booking from "./Booking.js";

const Artist = sequelize.define(
  "Artist",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "artists",
    timestamps: true,
  }
);

Artist.hasMany(Booking, { foreignKey: "artist_id", as: "bookings" });

export default Artist;
