import { INTEGER, STRING } from "sequelize";
import sequelize from "../../db";
export const Genre = sequelize.define('genres', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    genreName: { type: STRING, unique: true, notNull: true },
}, {
    timestamps: false
});
