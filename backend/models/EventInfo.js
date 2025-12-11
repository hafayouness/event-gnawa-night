import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Artist from "./Artist.js";
import EventInfo from "./EventInfo.js";

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    confirmation_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ticket_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("confirmed", "cancelled", "pending"),
      defaultValue: "confirmed",
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "bookings",
    timestamps: true,
  }
);

Booking.belongsTo(EventInfo, { foreignKey: "event_id", as: "event" });
Booking.belongsTo(Artist, { foreignKey: "artist_id", as: "artist" });

export default Booking;
