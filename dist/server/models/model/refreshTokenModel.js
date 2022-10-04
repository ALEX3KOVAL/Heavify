import { DATE, INTEGER, STRING } from "sequelize";
import sequelize from "../../db";
import { v4 } from "uuid";
export const RefreshToken = sequelize.define('refreshTokens', {
    //@ts-ignore
    token: { type: STRING, notNull: true },
    //@ts-ignore
    userId: { type: INTEGER, foreignKey: true, references: { table: "users", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    expiryDate: { type: DATE, notNull: true }
}, {
    timestamps: false
});
//@ts-ignore
RefreshToken.createToken = async function (id) {
    let expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + Number(process.env.JWT_REFRESH_EXPIRATION));
    let _token = v4();
    let refreshToken = await this.create({
        userId: id,
        token: _token,
        expiryDate: expiredAt.getTime()
    });
    return refreshToken.token;
};
//@ts-ignore
RefreshToken.verifyExpiration = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
};
