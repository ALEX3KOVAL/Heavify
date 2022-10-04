import { INTEGER } from "sequelize";
import sequelize from "../../db";
export const GenreAlbum = sequelize.define('genre_albums', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    genreId: { type: INTEGER, foreignKey: true, references: { table: "genres", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    albumId: { type: INTEGER, foreignKey: true, references: { table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false,
});
