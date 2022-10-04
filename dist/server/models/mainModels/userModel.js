import { INTEGER, STRING } from "sequelize";
import sequelize from "../../db";
export const User = sequelize.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    userName: { type: STRING, unique: true, notNull: true },
    email: { type: STRING, unique: true },
    phoneNumber: { type: STRING, unique: true },
    //@ts-ignore
    password: { type: STRING, unique: true, notNull: true },
    //@ts-ignore
    role: { type: STRING, notNull: true, defaultValue: "USER" }
}, {
    timestamps: false
});
