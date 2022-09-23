import seq from "../../db";
import { Song, Author, Selection } from "../../models/models";
import { findAll } from './crud';
import { createSqlStringBy, createWhereClauseObject, getAttributesConstantsBy, getIncludeConstantsBy } from "./databaseQueryUtils";
import { Album } from "../../models/models";
export const getAllSongsInfoBy = async (queryValue = "", queryKey = "") => {
    switch (queryKey) {
        case "":
            var allSongsInfo = await findAll(Song, getAttributesConstantsBy("song"), true, true, getIncludeConstantsBy("song"));
            allSongsInfo.map((value, index, array) => {
                delete value["album"];
                delete value["author"];
            });
            return allSongsInfo;
        case "selectionId":
            var [result, _] = await seq.query(createSqlStringBy("song", queryValue, queryKey));
            return result;
        case "search":
            var [result, _] = await seq.query(createSqlStringBy("song", queryValue, queryKey));
            return result;
        default:
            var allSongsInfoQueryKey = await findAll(Song, getAttributesConstantsBy("song", queryKey), true, true, getIncludeConstantsBy("song", queryKey), createWhereClauseObject("song", "songId", queryValue, queryKey));
            allSongsInfoQueryKey.map((value, index, array) => {
                delete value["album"];
                delete value["author"];
            });
            return allSongsInfoQueryKey;
    }
};
export const getAllAlbumsInfoBy = async (queryValue = "", queryKey = "") => {
    switch (queryKey) {
        case "authorId":
            var albumsInfo = await findAll(Album, getAttributesConstantsBy("album", queryKey), true, true, getIncludeConstantsBy("album", queryKey), createWhereClauseObject("album", "albumId", queryValue, queryKey));
            albumsInfo.map((value, index, array) => {
                delete value["song"];
                delete value["genre"];
            });
            return albumsInfo;
        default:
            var albumsInfo = await findAll(Album, getAttributesConstantsBy("album"), true, true, getIncludeConstantsBy("album"));
            albumsInfo.map((value, index, array) => delete value["song"]);
            return albumsInfo;
    }
};
export const getAllAuthorsInfoBy = async (queryValue = "", queryKey = "") => {
    switch (queryKey) {
        case "":
            var allAuthorsInfo = await findAll(Author, getAttributesConstantsBy("author"), true, true);
            return allAuthorsInfo;
    }
};
export const getAllSelectionsInfo = async (queryValue = "", queryKey = "") => {
    switch (queryKey) {
        case "":
            var allSelectionsInfo = await findAll(Selection, getAttributesConstantsBy("selection"), true, true);
            return allSelectionsInfo;
    }
};
const getAllSongs = async () => {
    const songsInfo = await Song.findAll({
        include: [{ model: Author, as: "author" }],
        attributes: ["songName", "img", "author.authorName"],
        raw: true,
        nest: true
    });
    songsInfo.map((value, index, array) => { delete value["author"]; });
    return songsInfo;
};
const getAllSongsBySelectionIdOrSongName = async (selectionId) => {
    const songsInfo = await Song.findAll({
        where: {
            songId: seq.literal(`(SELECT selection_songs.songId from selection_songs WHERE selection_songs.selectionId = ${selectionId}) = songs.id`)
        },
        include: [{ model: Author, as: "author" }],
        attributes: ["songName", "img", "author.authorName"]
    });
    return songsInfo;
};
export const getAllSongsBySongName = async (songName) => {
    const songsInfo = await Song.findAll({
        where: {
            songId: seq.literal(`(SELECT song.id from songs WHERE song.songName = ${songName})`)
        },
        include: [{ model: Author, as: "author" }],
        attributes: ["songName", "img", "author.authorName"]
    });
};
