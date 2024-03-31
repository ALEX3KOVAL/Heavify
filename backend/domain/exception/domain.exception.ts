import {InternalServerErrorException} from "@nestjs/common";

export class DomainException extends InternalServerErrorException {
    constructor(m: string) {
        super(m);
    }
}