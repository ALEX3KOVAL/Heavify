import {DomainException} from "../exception/domain.exception";

export const failIf = (condition: boolean, m: string): void => {
    if (condition) throw new DomainException(m);
}