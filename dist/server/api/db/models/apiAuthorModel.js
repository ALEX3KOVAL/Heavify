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
import { Author } from "../../../models/models";
import { getAttributesConstantsBy } from "../databaseQueryUtils";
const getAllAuthorsInfoBy = (queryValue = "", queryKey = "") => __awaiter(void 0, void 0, void 0, function* () {
    switch (queryKey) {
        case "":
            var allAuthorsInfo = yield findAll(Author, getAttributesConstantsBy("author"), true, true);
            return allAuthorsInfo;
    }
});
export { getAllAuthorsInfoBy };
//# sourceMappingURL=apiAuthorModel.js.map