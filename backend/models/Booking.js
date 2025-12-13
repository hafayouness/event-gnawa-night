import { DataTypes } from "sequelize";

const defineBooking = (sequelize) => {
  return sequelize.define(
    "Booking",
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      confirmation_code: {
        type: DataTypes.STRING,
        unique: true,
      },
      artist_id: {
        type: DataTypes.INTEGER,
      },
      event_id: {
        type: DataTypes.INTEGER,
      },
      booking_id: { type: DataTypes.STRING, unique: true },
      ticket_id: { type: DataTypes.STRING, unique: true },
      tickets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: "bookings",
      timestamps: true,
    }
  );
};

export default defineBooking;
