import { getAllAlbumsInfoBy } from "../db/apiModels";
import { getAttributesConstantsBy, getIncludeConstantsBy } from "../db/databaseQueryUtils";
import { Album } from "../../models/models";
export const add = async (req, res) => {
    const { name, rating } = req.body;
    await Album.create({ name, rating });
    return res.json({ name, rating });
};
export const getAll = async (req, res) => {
    const { authorId } = req.query;
    if (!authorId) {
        const albumsInfo = await getAllAlbumsInfoBy();
        return res.json(albumsInfo);
    }
    const albumsInfo = await getAllAlbumsInfoBy(authorId, "authorId");
    return res.json(albumsInfo);
};
export const getOne = async (req, res) => {
    const { id } = req.params;
    const albumInfo = await Album.findOne({
        where: { id },
        include: getIncludeConstantsBy("album"),
        attributes: getAttributesConstantsBy("album", "one"),
        raw: true,
        nest: true
    });
    //@ts-ignore
    delete albumInfo["song"];
    return res.json(albumInfo);
};
