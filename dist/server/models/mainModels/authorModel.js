import { FLOAT, INTEGER, STRING } from "sequelize";
import sequelize from "../../db";
export const Author = sequelize.define('authors', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    authorName: { type: STRING, unique: true, notNull: true },
    //@ts-ignore
    authorRating: { type: FLOAT, notNull: true, defaultValue: 0.0 },
    //@ts-ignore
    authorImg: { type: STRING, notNull: true, defaultValue: "author_default.jpg" }
}, {
    timestamps: false
});
