import {host} from "@/http";

const getPicturesGroupByNames = async (pageName: string, componentType: string, componentName = "") => {
    //@ts-ignore
    const {filesNames} = (await host.get(`api/pictures/${pageName}/${componentType}/${componentName}`)).data;
    console.log(filesNames);
    return filesNames;
}
export default getPicturesGroupByNames;
