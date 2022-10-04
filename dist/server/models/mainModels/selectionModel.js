import { INTEGER, STRING } from "sequelize";
import sequelize from "../../db";
export const Selection = sequelize.define('selections', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    selectionName: { type: STRING, unique: true, notNull: true },
    //@ts-ignore
    selectionImg: { type: STRING, unique: true, notNull: true, defaultValue: "selection_default.jpg" }
}, {
    timestamps: false
});
