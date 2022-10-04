import { INTEGER, STRING } from "sequelize";
import sequelize from "../../db";
export const Song = sequelize.define('songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    songName: { type: STRING, unique: true, notNull: true },
    img: { type: STRING, defaultValue: "image.png" },
    releaseYear: { type: STRING, defaultValue: "Unknown" }
}, {
    timestamps: false,
});
