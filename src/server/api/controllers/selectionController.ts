import {getAllSelectionsInfo} from "../db/models/apiModels";
export const SelectionController = function() {};
SelectionController.getAllSelections = async (req: any, res: any) => {
    const allSelectionsInfo = await getAllSelectionsInfo();
    //return res.json(allSelectionsInfo);
}
