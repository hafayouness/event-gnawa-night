import { DataTypes } from "sequelize";

const defineEventInfo = (sequelize) => {
  return sequelize.define(
    "EventInfo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "event_info",
      timestamps: true,
    }
  );
};

export default defineEventInfo;
