import {Song} from "../../models/models";
import {getAllSelectionsInfo} from "../db/apiModels";

export const getAll = async (req: any, res: any) => {
    const allSelectionsInfo = await getAllSelectionsInfo();
    return res.json(allSelectionsInfo);
}
