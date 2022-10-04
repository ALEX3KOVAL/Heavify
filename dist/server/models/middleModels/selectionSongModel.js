import { INTEGER } from "sequelize";
import sequelize from "../../db";
export const SelectionSong = sequelize.define('selection_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    selectionId: { type: INTEGER, foreignKey: true, references: { table: "selections", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
