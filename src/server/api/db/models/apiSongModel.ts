import {findAll} from "../crud";
import {Song} from "../../../models/models";
import {
    createSqlStringBy,
    createWhereClauseObject,
    getAttributesConstantsBy,
    getIncludeConstantsBy
} from "../databaseQueryUtils";
import seq from "../../../db";

const getAllSongsInfoBy = async (queryValue: string = "", queryKey: string = ""): Promise<any> => {
    switch (queryKey) {
        case "":
            let allSongsInfo = await findAll(Song,
                getAttributesConstantsBy("song")!,
                true,
                true,
                getIncludeConstantsBy("song"));
            allSongsInfo.map((value: any, index: number, array: any) =>  {
                delete value["album"];
                delete value["author"];
            });
            return allSongsInfo;
        case "selectionId":
            let [result, _] = await seq.query(createSqlStringBy("song", queryValue, queryKey)!);
            return result;
        case "search":
            [result, _] = await seq.query(createSqlStringBy("song", queryValue, queryKey)!);
            return result;
        default:
            let allSongsInfoQueryKey =  await findAll(Song,
                getAttributesConstantsBy("song", queryKey)!,
                true,
                true,
                getIncludeConstantsBy("song", queryKey),
                createWhereClauseObject("song", "songId", queryValue, queryKey));
            allSongsInfoQueryKey.map((value: any, index: number, array: any) =>  {
                delete value["album"];
                delete value["author"];
            });
            return allSongsInfoQueryKey;
    }
}

export {getAllSongsInfoBy};
