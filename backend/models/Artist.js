import { DataTypes } from "sequelize";

const defineArtist = (sequelize) => {
  return sequelize.define(
    "Artist",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      bio: { type: DataTypes.TEXT },
      photo_url: { type: DataTypes.STRING },
    },
    { tableName: "artists", timestamps: true }
  );
};

export default defineArtist;
