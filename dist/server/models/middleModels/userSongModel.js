import { INTEGER } from "sequelize";
import sequelize from "../../db";
export const UserSong = sequelize.define('user_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    userId: { type: INTEGER, foreignKey: true, references: { table: "users", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
