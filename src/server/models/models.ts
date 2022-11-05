import {DATE, FLOAT, INTEGER, Model, ModelStatic, STRING, BOOLEAN} from "sequelize";
import sequelize from "../db";
import {v4} from "uuid";

export const Album: ModelStatic<Model> = sequelize.define('albums', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    albumName: {type: STRING, unique: true, notNull: true!},
    //@ts-ignore
    albumRating: {type: FLOAT, notNull: true, defaultValue: 0.0},
}, {
    timestamps: false
});

export const Author: ModelStatic<Model> = sequelize.define('authors', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    authorName: {type: STRING, unique: true, notNull: true},
    //@ts-ignore
    authorRating: {type: FLOAT, notNull: true, defaultValue: 0.0},
    //@ts-ignore
    authorImg: {type: STRING, notNull: true, defaultValue: "author_default.jpg"}
}, {
    timestamps: false
});

export const Genre: ModelStatic<Model> = sequelize.define('genres', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    genreName: {type: STRING, unique: true, notNull: true},
}, {
    timestamps: false
});

export const RefreshToken: ModelStatic<Model> = sequelize.define('refresh_tokens', {
    //@ts-ignore
    token: {type: STRING, notNull: true},
    //@ts-ignore
    userId: {type: STRING, foreignKey: true, unique: true, references: {table: "users", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
    //@ts-ignore
    expiryDate: {type: DATE, notNull: true},
    //@ts-ignore
    isActivated: {type: BOOLEAN, defaultValue: false},
    //@ts-ignore
    activationLink: {type: STRING},
}, {
    timestamps: false
});

//@ts-ignore
RefreshToken.createToken = async function (id: string, token) {
    let expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + Number(process.env.JWT_REFRESH_EXPIRATION!));
    let _token = (typeof(token) === "undefined") ? v4() : token;
    let refreshToken = await this.create({
        userId: id,
        token: _token,
        expiryDate: expiredAt.getTime()
    });
    return refreshToken.token;
};

export const Selection: ModelStatic<Model> = sequelize.define('selections', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    selectionName: {type: STRING, unique: true, notNull: true},
    //@ts-ignore
    selectionImg: {type: STRING, unique: true, notNull: true, defaultValue: "selection_default.jpg"}
}, {
    timestamps: false
});

export const Song: ModelStatic<Model> = sequelize.define('songs', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    songName: {type: STRING, unique: true, notNull: true},
    img: {type: STRING, defaultValue: "image.png"},
    releaseYear: {type: STRING, defaultValue: "Unknown"}
}, {
    timestamps: false,
});

export const User: ModelStatic<Model> = sequelize.define('users', {
    id: {type: STRING, primaryKey: true},
    //@ts-ignore
    userName: {type: STRING, unique: true, notNull: true},
    email: {type: STRING, unique: true},
    phoneNumber: {type: STRING, unique: true},
    //@ts-ignore
    password: {type: STRING, unique: true, notNull: true},
    //@ts-ignore
    role: {type: STRING, notNull: true, defaultValue: "USER"},
    //@ts-ignore
    isActivated: {type: BOOLEAN, defaultValue: false},
    //@ts-ignore
    activationLink: {type: STRING}
}, {
    timestamps: false
});

export const AlbumSong: ModelStatic<Model> = sequelize.define('album_songs', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    albumId: {type: INTEGER, foreignKey: true, references: {table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
    //@ts-ignore
    songId: {type: INTEGER, foreignKey: true, references: {table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade"}}
}, {
    timestamps: false
});

export const AuthorAlbum: ModelStatic<Model> = sequelize.define('author_albums', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    authorId: {type: INTEGER, foreignKey: true, references: {table: "authors", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
    //@ts-ignore
    albumId: {type: INTEGER, foreignKey: true, references: {table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade"}}
}, {
    timestamps: false
});

export const AuthorSong: ModelStatic<Model> = sequelize.define('author_songs', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    authorId: {type: INTEGER, foreignKey: true, references: {table: "authors", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
    //@ts-ignore
    songId: {type: INTEGER, foreignKey: true, references: {table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
}, {
    timestamps: false
});

export const GenreAlbum: ModelStatic<Model> = sequelize.define('genre_albums', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    genreId: {type: INTEGER, foreignKey: true, references: {table: "genres", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
    //@ts-ignore
    albumId: {type: INTEGER, foreignKey: true, references: {table: "albums", field: "id", onDelete: "cascade", onUpdate: "cascade"}}
}, {
    timestamps: false,
});

export const GenreSong: ModelStatic<Model> = sequelize.define('genre_songs', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    genreId: {type: INTEGER, foreignKey: true, references: {table: "genres", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
    //@ts-ignore
    songId: {type: INTEGER, foreignKey: true, references: {table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade"}}
}, {
    timestamps: false
});

export const SelectionSong: ModelStatic<Model> = sequelize.define('selection_songs', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    selectionId: {type: INTEGER, foreignKey: true, references: {table: "selections", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
    //@ts-ignore
    songId: {type: INTEGER, foreignKey: true, references: {table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade"}}
}, {
    timestamps: false
});

export const UserSong: ModelStatic<Model> = sequelize.define('user_songs', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    //@ts-ignore
    userId: {type: STRING, foreignKey: true, references: {table: "users", field: "id", onDelete: "cascade", onUpdate: "cascade"}},
    //@ts-ignore
    songId: {type: INTEGER, foreignKey: true, references: {table: "songs", field: "id", onDelete: "cascade", onUpdate: "cascade"}}
}, {
    timestamps: false
});

User.belongsToMany(Song, {through: UserSong, as: "song"});
Song.belongsToMany(User, {through: UserSong, as: "user"});

Song.hasOne(AlbumSong, {foreignKey: "songId"});

Album.belongsToMany(Song, {through: AlbumSong, as: "song"});
Song.belongsToMany(Album, {through: AlbumSong, as: "album"});

Genre.belongsToMany(Album, {through: GenreAlbum, as: "album"});
Album.belongsToMany(Genre, {through: GenreAlbum, as: "genre"});

Author.belongsToMany(Album, {through: AuthorAlbum, as: "album"});
Album.belongsToMany(Author, {through: AuthorAlbum, as: "author"});

Selection.belongsToMany(Song, {through: SelectionSong, as: "song"});
Song.belongsToMany(Selection, {through: SelectionSong, as: "selection"});

Genre.belongsToMany(Song, {through: GenreSong, as: "song"});
Song.belongsToMany(Genre, {through: GenreSong, as: "genre"});

Author.belongsToMany(Song, {through: AuthorSong, as: "song"});
Song.belongsToMany(Author, {through: AuthorSong, as: "author"});

User.hasOne(RefreshToken, {foreignKey: "userId"});
