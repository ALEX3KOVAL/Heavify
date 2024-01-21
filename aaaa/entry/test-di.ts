import { Service } from "typedi";
import Result from "./extensions/Result";

@Service()
export default class ExampleInjectedService {
    printMessage() {
        let s: Result<number> = Result.runCatching(function () {
            const arr: number[] = [1,2];

            if (!arr[3]) throw new Error("Элемент отсутствует в массиве")
            return arr[3]
        })

       s.getOrNull()
    }
}