import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Booking from "./Booking.js";

const EventInfo = sequelize.define(
  "EventInfo",
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("upcoming", "ongoing", "completed", "cancelled"),
      defaultValue: "upcoming",
    },
  },
  {
    tableName: "event_info",
    timestamps: true,
  }
);

EventInfo.hasMany(Booking, { foreignKey: "event_id", as: "bookings" });

export default EventInfo;
