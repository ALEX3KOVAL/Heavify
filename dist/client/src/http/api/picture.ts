import {host} from "@/http";

const getPicturesGroupByNames = async (pageName: string, componentName: string) => {
    //@ts-ignore
    const {filesNames} = (await host.get(`api/pictures/${pageName}/${componentName}`)).data;
    console.log(filesNames);
    return filesNames;
}
export default getPicturesGroupByNames;
