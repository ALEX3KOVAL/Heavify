import { findAll } from "../crud";
import { Selection } from "../../../models/models";
import { getAttributesConstantsBy } from "../databaseQueryUtils";
const getAllSelectionsInfo = async (queryValue = "", queryKey = "") => {
    switch (queryKey) {
        case "":
            var allSelectionsInfo = await findAll(Selection, getAttributesConstantsBy("selection"), true, true);
            return allSelectionsInfo;
    }
};
export { getAllSelectionsInfo };
