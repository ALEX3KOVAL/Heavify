import { getAllAuthorsInfoBy } from "../db/apiModels";
import { Author } from '../../models/models';
export const add = async (req, res) => {
    const { name, rating } = req.body;
    await Author.create({ name, rating });
    return res.json({ name, rating });
};
export const getAll = async (req, res) => {
    const authors = await getAllAuthorsInfoBy();
    return res.json(authors);
};
