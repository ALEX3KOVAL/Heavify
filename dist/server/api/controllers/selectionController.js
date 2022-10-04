import { getAllSelectionsInfo } from "../db/models/apiModels";
export const getAll = async (req, res) => {
    const allSelectionsInfo = await getAllSelectionsInfo();
    return res.json(allSelectionsInfo);
};
