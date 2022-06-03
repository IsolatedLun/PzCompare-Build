/**
 * @param x - Object
 * @param path - String path
 * @def - Default return value
*/
export function objGet(x: object, path: string, def: any) {
   
    try {
        console.log(eval(`( ${path} )`))
        return eval(path);
    }

    catch {
        return def;
    }
}