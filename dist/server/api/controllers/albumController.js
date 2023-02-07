var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllAlbumsInfoBy } from "../db/models/apiModels";
import { getAttributesConstantsBy, getIncludeConstantsBy } from "../db/databaseQueryUtils";
import { Album } from "../../models/models";
export const AlbumController = function () { };
AlbumController.addAlbum = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rating } = req.body;
    yield Album.create({ name, rating });
    return res.json({ name, rating });
});
AlbumController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorId } = req.query;
    if (!authorId) {
        const albumsInfo = yield getAllAlbumsInfoBy();
        return res.json(albumsInfo);
    }
    const albumsInfo = yield getAllAlbumsInfoBy(authorId, "authorId");
    return res.json(albumsInfo);
});
AlbumController.getOneAlbum = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const albumInfo = yield Album.findOne({
        where: { id },
        include: getIncludeConstantsBy("album"),
        attributes: getAttributesConstantsBy("album", "one"),
        raw: true,
        nest: true
    });
    //@ts-ignore
    delete albumInfo["song"];
    return res.json(albumInfo);
});
//# sourceMappingURL=albumController.js.map