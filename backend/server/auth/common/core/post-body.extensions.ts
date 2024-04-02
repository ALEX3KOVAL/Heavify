import {Result} from "../../../../domain/extensions/result.extension";
import {BadRequestException} from "@nestjs/common";

export const numberOrFail = (paramName: string, body: object): Result<number> => Result.runCatching(() => {
    const param: string | undefined | null = body[paramName];

    if (param) {
        return parseInt(param);
    }

    throw new BadRequestException(`Body не содержит параметр ${paramName}`);
})

export const getOrFail = (paramName: string, body: object) => Result.runCatching(() => {
    const param: string | undefined | null = body[paramName];

    if (param) {
        return param;
    }

    throw new BadRequestException(`Body не содержит параметр ${paramName}`);
})