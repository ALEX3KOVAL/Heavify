import { findAll } from "../crud";
import { Album } from "../../../models/models";
import { createWhereClauseObject, getAttributesConstantsBy, getIncludeConstantsBy } from "../databaseQueryUtils";
const getAllAlbumsInfoBy = async (queryValue = "", queryKey = "") => {
    switch (queryKey) {
        case "authorId":
            let albumsInfo = await findAll(Album, getAttributesConstantsBy("album", queryKey), true, true, getIncludeConstantsBy("album", queryKey), createWhereClauseObject("album", "albumId", queryValue, queryKey));
            albumsInfo.map((value, index, array) => {
                delete value["song"];
                delete value["genre"];
            });
            return albumsInfo;
        default:
            albumsInfo = await findAll(Album, getAttributesConstantsBy("album"), true, true, getIncludeConstantsBy("album"));
            albumsInfo.map((value, index, array) => delete value["song"]);
            return albumsInfo;
    }
};
export { getAllAlbumsInfoBy };
