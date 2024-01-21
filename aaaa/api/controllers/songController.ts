import {Song} from "../../models/models";
import "../db/models/apiModels";
import Sound from "play-sound";
import {getAllSongsInfoBy} from "../db/models/apiModels";
import {getAttributesConstantsBy, getIncludeConstantsBy} from "../db/databaseQueryUtils";
import {v4} from "uuid";
import {fileURLToPath} from "url";
import path from "node:path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const SongController = function() {};
SongController.addSong = async (req: any, res: any, next: any) => {
    try {
        const {releaseYear} = req.body;
        const {imgFile, audioFile} = req.files;
        let imgFileName = v4() + ".jpg";
        let audioFileName = v4() + ".mp3";
        imgFile.mv(path.resolve(__dirname, "../../../../assets", 'images', imgFileName));
        audioFile.mv(path.resolve(__dirname, "../../../../assets", 'songs', audioFileName));
        const song = await Song.create({songName: audioFileName, releaseYear: releaseYear, img: imgFileName});
        return res.json(song);
    }
    catch (e) {
        next(e);
    }
}

SongController.getAllSongs = async (req: any, res: any) => {
        const {albumId, selectionId, search} = req.query;
        Sound().play(path.resolve(__dirname, "../../../../assets", "songs", "67202b28-09ed-4762-a8b4-eb1d44beb88b.mp3"));
        if (!albumId && !selectionId && !search) { //пользователь открывает свои аудио
            var allSongsInfo = await getAllSongsInfoBy();
            return res.json(allSongsInfo);
        }
        if (albumId) {
            var allSongsInfo = await getAllSongsInfoBy(albumId, "albumId");
            return res.json(allSongsInfo);
        }
        if (selectionId) {
            var allSongsInfoQuery = await getAllSongsInfoBy(selectionId, "selectionId");
            return res.json(allSongsInfoQuery);
        }
        var allSongsInfoQuery = await getAllSongsInfoBy(search, "search");
        return res.json(allSongsInfoQuery);
}

SongController.getOneSong = async (req: any, res: any) => {
        const {id} = req.params;
        //const songInfo = await getOneInfoBy(Song, "song", id);
        const songInfo = await Song.findOne({
            where: {id},
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
}
