import {Email} from "../vo/email";
import {Phone} from "../vo/phone";

export const email = (value: string) => Email.from(value).getOrThrow();
export const phone = (value: string) => Phone.from(value).getOrThrow();