var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { findAll } from "../crud";
import { Album } from "../../../models/models";
import { createWhereClauseObject, getAttributesConstantsBy, getIncludeConstantsBy } from "../databaseQueryUtils";
const getAllAlbumsInfoBy = (queryValue = "", queryKey = "") => __awaiter(void 0, void 0, void 0, function* () {
    switch (queryKey) {
        case "authorId":
            let albumsInfo = yield findAll(Album, getAttributesConstantsBy("album", queryKey), true, true, getIncludeConstantsBy("album", queryKey), createWhereClauseObject("album", "albumId", queryValue, queryKey));
            albumsInfo.map((value, index, array) => {
                delete value["song"];
                delete value["genre"];
            });
            return albumsInfo;
        default:
            albumsInfo = yield findAll(Album, getAttributesConstantsBy("album"), true, true, getIncludeConstantsBy("album"));
            albumsInfo.map((value, index, array) => delete value["song"]);
            return albumsInfo;
    }
});
export { getAllAlbumsInfoBy };
//# sourceMappingURL=apiAlbumAuthor.js.map