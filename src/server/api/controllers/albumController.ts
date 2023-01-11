import {getAllAlbumsInfoBy} from "../db/models/apiModels";
import {getAttributesConstantsBy, getIncludeConstantsBy} from "../db/databaseQueryUtils";
import {Album} from "../../models/models";

export const AlbumController = function() {};
AlbumController.addAlbum = async (req: any, res: any) => {
        const {name, rating} = req.body;
        await Album.create({name, rating});
        return res.json({name, rating});
    }

AlbumController.getAll = async (req: any, res: any) => {
        const {authorId} = req.query;
        if (!authorId) {
            const albumsInfo = await getAllAlbumsInfoBy();
            return res.json(albumsInfo);
        }
        const albumsInfo = await getAllAlbumsInfoBy(authorId, "authorId");
        return res.json(albumsInfo);
    }

AlbumController.getOneAlbum = async(req: any, res: any) => {
        const {id} = req.params;
        const albumInfo = await Album.findOne({
            where: {id},
            include: getIncludeConstantsBy("album"),
            attributes: getAttributesConstantsBy("album", "one"),
            raw: true,
            nest: true
        });
        //@ts-ignore
        delete albumInfo["song"];
        return res.json(albumInfo);
    }
