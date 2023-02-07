var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const findAll = (model, attributes, raw = false, nest = false, include = [], whereClauseObject = {}) => __awaiter(void 0, void 0, void 0, function* () {
    return model.findAll({
        where: whereClauseObject,
        include: include,
        attributes: attributes,
        raw: raw,
        nest: nest
    });
});
export const add = (model, fieldsValues) => __awaiter(void 0, void 0, void 0, function* () {
    //вызвать modelValidateController (контроллер валидаторов полей моделей) и передать ему название модели, обработка ошибки, если валидация не пройдена
    yield model.create(fieldsValues);
    return true; //успешная валидация и добавление в базу данных
});
//# sourceMappingURL=crud.js.map