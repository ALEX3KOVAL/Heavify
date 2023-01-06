var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DATE, FLOAT, INTEGER, STRING, BOOLEAN } from "sequelize";
import { sequelizeClient } from "../db";
import { v4 } from "uuid";
export const Album = sequelizeClient.define('albums', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    albumName: { type: STRING, unique: true, notNull: true },
    //@ts-ignore
    albumRating: { type: FLOAT, notNull: true, defaultValue: 0.0 },
}, {
    timestamps: false
});
export const Author = sequelizeClient.define('authors', {
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
export const Genre = sequelizeClient.define('genres', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    genreName: { type: STRING, unique: true, notNull: true },
}, {
    timestamps: false
});
export const RefreshToken = sequelizeClient.define('refresh_tokens', {
    //@ts-ignore
    token: { type: STRING, notNull: true },
    //@ts-ignore
    userId: { type: STRING, foreignKey: true, unique: true, references: { table: "users", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    expiryDate: { type: DATE, notNull: true },
    //@ts-ignore
    isActivated: { type: BOOLEAN, defaultValue: false },
    //@ts-ignore
    activationLink: { type: STRING },
}, {
    timestamps: false
});
//@ts-ignore
RefreshToken.createToken = function (id, token) {
    return __awaiter(this, void 0, void 0, function* () {
        let expiredAt = new Date();
        expiredAt.setSeconds(expiredAt.getSeconds() + Number(process.env.JWT_REFRESH_EXPIRATION));
        let _token = (typeof (token) === "undefined") ? v4() : token;
        let refreshToken = yield this.create({
            userId: id,
            token: _token,
            expiryDate: expiredAt.getTime()
        });
        return refreshToken.token;
    });
};
export const Selection = sequelizeClient.define('selections', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    selectionName: { type: STRING, unique: true, notNull: true },
    //@ts-ignore
    selectionImg: { type: STRING, unique: true, notNull: true, defaultValue: "selection_default.jpg" }
}, {
    timestamps: false
});
export const Song = sequelizeClient.define('songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    songName: { type: STRING, unique: true, notNull: true },
    img: { type: STRING, defaultValue: "image.png" },
    releaseYear: { type: STRING, defaultValue: "Unknown" }
}, {
    timestamps: false,
});
export const User = sequelizeClient.define('users', {
    id: { type: STRING, primaryKey: true },
    //@ts-ignore
    userName: { type: STRING, unique: true, notNull: true },
    email: { type: STRING, unique: true },
    phoneNumber: { type: STRING, unique: true },
    //@ts-ignore
    password: { type: STRING, unique: true, notNull: true },
    //@ts-ignore
    role: { type: STRING, notNull: true, defaultValue: "USER" },
    //@ts-ignore
    isActivated: { type: BOOLEAN, defaultValue: false },
    //@ts-ignore
    activationLink: { type: STRING }
}, {
    timestamps: false
});
//@ts-ignore
User.checkIsActivated = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield this.findOne({
            where: { email }
        });
        return userData === null || userData === void 0 ? void 0 : userData.isActivated;
    });
};
export const AlbumSong = sequelizeClient.define('album_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    albumId: { type: INTEGER, foreignKey: true, references: { table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
export const AuthorAlbum = sequelizeClient.define('author_albums', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    authorId: { type: INTEGER, foreignKey: true, references: { table: "authors", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    albumId: { type: INTEGER, foreignKey: true, references: { table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
export const AuthorSong = sequelizeClient.define('author_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    authorId: { type: INTEGER, foreignKey: true, references: { table: "authors", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
}, {
    timestamps: false
});
export const GenreAlbum = sequelizeClient.define('genre_albums', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    genreId: { type: INTEGER, foreignKey: true, references: { table: "genres", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    albumId: { type: INTEGER, foreignKey: true, references: { table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false,
});
export const GenreSong = sequelizeClient.define('genre_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    genreId: { type: INTEGER, foreignKey: true, references: { table: "genres", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
export const SelectionSong = sequelizeClient.define('selection_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    selectionId: { type: INTEGER, foreignKey: true, references: { table: "selections", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
export const UserSong = sequelizeClient.define('user_songs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    //@ts-ignore
    userId: { type: STRING, foreignKey: true, references: { table: "users", field: "id", onDelete: "cascade", onUpdate: "cascade" } },
    //@ts-ignore
    songId: { type: INTEGER, foreignKey: true, references: { table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade" } }
}, {
    timestamps: false
});
User.belongsToMany(Song, { through: UserSong, as: "song" });
Song.belongsToMany(User, { through: UserSong, as: "user" });
Song.hasOne(AlbumSong, { foreignKey: "songId" });
Album.belongsToMany(Song, { through: AlbumSong, as: "song" });
Song.belongsToMany(Album, { through: AlbumSong, as: "album" });
Genre.belongsToMany(Album, { through: GenreAlbum, as: "album" });
Album.belongsToMany(Genre, { through: GenreAlbum, as: "genre" });
Author.belongsToMany(Album, { through: AuthorAlbum, as: "album" });
Album.belongsToMany(Author, { through: AuthorAlbum, as: "author" });
Selection.belongsToMany(Song, { through: SelectionSong, as: "song" });
Song.belongsToMany(Selection, { through: SelectionSong, as: "selection" });
Genre.belongsToMany(Song, { through: GenreSong, as: "song" });
Song.belongsToMany(Genre, { through: GenreSong, as: "genre" });
Author.belongsToMany(Song, { through: AuthorSong, as: "song" });
Song.belongsToMany(Author, { through: AuthorSong, as: "author" });
User.hasOne(RefreshToken, { foreignKey: "userId" });
//# sourceMappingURL=models.js.map