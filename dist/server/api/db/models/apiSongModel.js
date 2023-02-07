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
import { Song } from "../../../models/models";
import { createSqlStringBy, createWhereClauseObject, getAttributesConstantsBy, getIncludeConstantsBy } from "../databaseQueryUtils";
import { sequelizeClient } from "../../../db";
const getAllSongsInfoBy = (queryValue = "", queryKey = "") => __awaiter(void 0, void 0, void 0, function* () {
    switch (queryKey) {
        case "":
            let allSongsInfo = yield findAll(Song, getAttributesConstantsBy("song"), true, true, getIncludeConstantsBy("song"));
            allSongsInfo.map((value, index, array) => {
                delete value["album"];
                delete value["author"];
            });
            return allSongsInfo;
        case "selectionId":
            let [result, _] = yield sequelizeClient.query(createSqlStringBy("song", queryValue, queryKey));
            return result;
        case "search":
            [result, _] = yield sequelizeClient.query(createSqlStringBy("song", queryValue, queryKey));
            return result;
        default:
            let allSongsInfoQueryKey = yield findAll(Song, getAttributesConstantsBy("song", queryKey), true, true, getIncludeConstantsBy("song", queryKey), createWhereClauseObject("song", "songId", queryValue, queryKey));
            allSongsInfoQueryKey.map((value, index, array) => {
                delete value["album"];
                delete value["author"];
            });
            return allSongsInfoQueryKey;
    }
});
export { getAllSongsInfoBy };
//# sourceMappingURL=apiSongModel.js.map