import { getAllSelectionsInfo } from "../db/apiModels";
export const getAll = async (req, res) => {
    const allSelectionsInfo = await getAllSelectionsInfo();
    return res.json(allSelectionsInfo);
};
