import {Model, ModelStatic, WhereOptions} from "sequelize";

export interface IInclude {
    model: ModelStatic<Model>,
    as: string
}

export const findAll = async (model: ModelStatic<Model>,
                       attributes: string[],
                       raw: boolean = false,
                       nest: boolean = false,
                       include: IInclude[] = [],
                       whereClauseObject: WhereOptions = {}) =>
{
    return model.findAll({
        where: whereClauseObject,
        include: include,
        attributes: attributes,
        raw: raw,
        nest: nest
    });
}

export const add = async (model: ModelStatic<Model>, fieldsValues: any): Promise<boolean> => {
    //вызвать modelValidateController (контроллер валидаторов полей моделей) и передать ему название модели, обработка ошибки, если валидация не пройдена
    await model.create(fieldsValues);
    return true; //успешная валидация и добавление в базу данных
}


