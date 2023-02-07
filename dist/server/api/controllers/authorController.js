var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllAuthorsInfoBy } from "../db/models/apiModels";
import { Author } from "../../models/models";
export const AuthorController = function () { };
AuthorController.addAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rating } = req.body;
    yield Author.create({ name, rating });
    return res.json({ name, rating });
});
AuthorController.getAllAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield getAllAuthorsInfoBy();
    return res.json(authors);
});
//# sourceMappingURL=authorController.js.map