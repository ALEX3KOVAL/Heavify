import { INTEGER } from "sequelize";
import sequelize from "../../db";
export const GenreSong = sequelize.define('genre_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    genreId: { type: INTEGER, foreignKey: true, references: { table: "genres", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
