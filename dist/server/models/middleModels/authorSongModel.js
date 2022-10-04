import { INTEGER } from "sequelize";
import sequelize from "../../db";
export const AuthorSong = sequelize.define('author_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    authorId: { type: INTEGER, foreignKey: true, references: { table: "authors", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
}, {
    timestamps: false
});
