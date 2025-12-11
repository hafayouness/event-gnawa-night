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

      full_name: {
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
    },
    {
      tableName: "bookings",
      timestamps: true,
    }
  );
};

export default defineBooking;
