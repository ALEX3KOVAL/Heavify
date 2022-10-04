import { findAll } from "../crud";
import { Author } from "../../../models/models";
import { getAttributesConstantsBy } from "../databaseQueryUtils";
const getAllAuthorsInfoBy = async (queryValue = "", queryKey = "") => {
    switch (queryKey) {
        case "":
            var allAuthorsInfo = await findAll(Author, getAttributesConstantsBy("author"), true, true);
            return allAuthorsInfo;
    }
};
export { getAllAuthorsInfoBy };
