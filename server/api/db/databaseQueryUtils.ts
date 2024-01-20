import {Album, Author, Genre, Song} from "../../models/models";
import {IInclude} from "./crud";
import {Sequelize} from "sequelize";

export const getAttributesConstantsBy = (modelName: string, queryKey: string = "") => {
    switch(modelName) {
        case "song":
            switch(queryKey) {
                case "":
                    return ["songName", "img", "releaseYear", "album.albumName", "album.albumRating", "author.authorName", "author.authorRating"];
                default:
                    return ["songName", "img", "author.authorName"];
            }
        case "album":
            switch(queryKey) {
                case "authorId":
                    return ['albumName', "albumRating", "genre.genreName", "song.img", "song.releaseYear"];
                case "one":
                    return ["albumName", "albumRating", "song.songName", "song.releaseYear"];
                default:
                    return ["albumName", "song.img", "song.releaseYear"];
            }
        case "author":
            return ["authorName", "authorImg"];
        case "selection":
            return ["selectionName", "selectionImg"];
        case "user":
            return []
    }
};

export const getIncludeConstantsBy = (modelName: string, queryKey: string = ""): IInclude[] => {
    switch(modelName) {
        case "song":
            switch (queryKey) {
                case "":
                    return [{model: Album, as: "album"}, {model: Author, as: "author"}];
                default:
                    return [{model: Author, as: "author"}];
            }
        case "album":
            switch(queryKey) {
                case "authorId":
                    return [{model: Genre, as: "genre"}, {model: Song, as: "song"}];
                default:
                    return [{model: Song, as: "song"}];
            }
    }
    return [];
}

export const createWhereClauseObject = (model:string, id: string, queryValue: string, queryKey: string = "") => {
    switch(queryKey) {
        case "":
            return {}
        default:
            return {id: Sequelize.literal(createSqlStringBy(model, queryValue, queryKey)!)}
    }
}

export const countOfTableRows = (modelName: string) => `(SELECT MAX(id) FROM ${modelName})`;

export const createSqlStringBy = (modelName: string, queryValue: string, queryKey: string) => {
    switch(modelName) {
        case "song":
            switch(queryKey) {
                case "albumId":
                    return `(SELECT album_songs.songId from album_songs WHERE album_songs.albumId = ${queryValue}) = songs.id`;
                case "selectionId":
                    return `(SELECT authorName, songName, img from (SELECT authorId, songName, img from (SELECT songs.songName, songs.img, songs.id   from  (SELECT selection_songs.songId from selection_songs 
                            INNER JOIN author_songs on selection_songs.songId = author_songs.songId WHERE selection_songs.selectionId = ${queryValue}) AS sel INNER JOIN songs on sel.songId = songs.id) AS sel_songs
                            INNER JOIN author_songs on sel_songs.id = author_songs.songId) AS sell INNER JOIN authors on sell.authorId = authors.id)`;
                case "search":
                    return `(SELECT songName, img, authorName from (SELECT author_songs.authorId, songs.songName, songs.img from songs inner join author_songs on songs.id = author_songs.songId WHERE songs.songName = ${queryValue}) as sell inner join authors on sell.authorId = authors.id)`;
            }
        case "album":
            switch(queryKey) {
                case "authorId":
                    return `(SELECT author_albums.albumId from author_albums WHERE author_albums.authorId = ${queryValue}) = albums.id`;
            }
    }
}
