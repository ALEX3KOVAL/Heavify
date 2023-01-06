var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Song } from "../../models/models";
import "../db/models/apiModels";
import Sound from "play-sound";
import { getAllSongsInfoBy } from "../db/models/apiModels";
import { getAttributesConstantsBy, getIncludeConstantsBy } from "../db/databaseQueryUtils";
import { v4 } from "uuid";
import { fileURLToPath } from "url";
import path from "node:path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const SongController = function () { };
SongController.addSong = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { releaseYear } = req.body;
        const { imgFile, audioFile } = req.files;
        let imgFileName = v4() + ".jpg";
        let audioFileName = v4() + ".mp3";
        imgFile.mv(path.resolve(__dirname, "../../../../assets", 'images', imgFileName));
        audioFile.mv(path.resolve(__dirname, "../../../../assets", 'songs', audioFileName));
        const song = yield Song.create({ songName: audioFileName, releaseYear: releaseYear, img: imgFileName });
        return res.json(song);
    }
    catch (e) {
        next(e);
    }
});
SongController.getAllSongs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { albumId, selectionId, search } = req.query;
    Sound().play(path.resolve(__dirname, "../../../../assets", "songs", "67202b28-09ed-4762-a8b4-eb1d44beb88b.mp3"));
    if (!albumId && !selectionId && !search) { //пользователь открывает свои аудио
        var allSongsInfo = yield getAllSongsInfoBy();
        return res.json(allSongsInfo);
    }
    if (albumId) {
        var allSongsInfo = yield getAllSongsInfoBy(albumId, "albumId");
        return res.json(allSongsInfo);
    }
    if (selectionId) {
        var allSongsInfoQuery = yield getAllSongsInfoBy(selectionId, "selectionId");
        return res.json(allSongsInfoQuery);
    }
    var allSongsInfoQuery = yield getAllSongsInfoBy(search, "search");
    return res.json(allSongsInfoQuery);
});
SongController.getOneSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //const songInfo = await getOneInfoBy(Song, "song", id);
    const songInfo = yield Song.findOne({
        where: { id },
        include: getIncludeConstantsBy("song"),
        attributes: getAttributesConstantsBy("song"),
        raw: true,
        nest: true
    });
    //@ts-ignore
    delete songInfo['album'];
    //@ts-ignore
    delete songInfo['author'];
    return res.json(songInfo);
});
//# sourceMappingURL=songController.js.map