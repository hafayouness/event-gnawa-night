import { DataTypes } from "sequelize";

const defineEventInfo = (sequelize) => {
  return sequelize.define(
    "EventInfo",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE },
      price: { type: DataTypes.FLOAT },
    },
    { tableName: "event_info", timestamps: true }
  );
};

export default defineEventInfo;
