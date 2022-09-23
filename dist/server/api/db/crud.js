export const findAll = async (model, attributes, raw = false, nest = false, include = [], whereClauseObject = {}) => {
    return model.findAll({
        where: whereClauseObject,
        include: include,
        attributes: attributes,
        raw: raw,
        nest: nest
    });
};

export const add = async (model, fieldsValues) => {
    //вызвать modelValidateController (контроллер валидаторов полей моделей) и передать ему название модели, обработка ошибки, если валидация не пройдена
    await model.create(fieldsValues);
    return true; //успешная валидация и добавление в базу данных
};
