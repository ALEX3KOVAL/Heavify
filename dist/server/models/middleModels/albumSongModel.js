import { INTEGER } from "sequelize";
import sequelize from "../../db";
export const AlbumSong = sequelize.define('album_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    albumId: { type: INTEGER, foreignKey: true, references: { table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
