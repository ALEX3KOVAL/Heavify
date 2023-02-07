var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UserService from "../service/user";
import { ErrorAPI } from "../api/http/error/ErrorAPI";
export const activateMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method === "OPTIONS") {
        return next(ErrorAPI.conflict("Данный HTTP-метод не предусмотрен"));
    }
    try {
        const { email } = req.body;
        yield UserService.checkActivated(email);
        next();
    }
    catch (err) {
        next(err);
    }
});
//# sourceMappingURL=activateMiddleware.js.map