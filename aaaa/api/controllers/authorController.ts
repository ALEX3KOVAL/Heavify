import {getAllAuthorsInfoBy} from "../db/models/apiModels";
import { Author } from "../../models/models";
export const AuthorController = function() {};
AuthorController.addAuthor = async (req: any, res: any) => {
        const {name, rating} = req.body;
        await Author.create({name, rating});
        return res.json({name, rating});
    }

AuthorController.getAllAuthors = async (req: any, res: any) => {
        const authors = await getAllAuthorsInfoBy();
        return res.json(authors);
    }
