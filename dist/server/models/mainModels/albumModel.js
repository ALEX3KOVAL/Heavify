import { FLOAT, INTEGER, STRING } from "sequelize";
import sequelize from "../../db";
export const Album = sequelize.define('albums', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    albumName: { type: STRING, unique: true, notNull: true },
    //@ts-ignore
    albumRating: { type: FLOAT, notNull: true, defaultValue: 0.0 },
}, {
    timestamps: false
});
