import { INTEGER } from "sequelize";
import sequelize from "../../db";
export const AuthorAlbum = sequelize.define('author_albums', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    authorId: { type: INTEGER, foreignKey: true, references: { table: "authors", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    albumId: { type: INTEGER, foreignKey: true, references: { table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
