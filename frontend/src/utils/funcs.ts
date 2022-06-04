import { Props_CubeCSS } from "../components/types";

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

export function propOrDefault<T>(x: T | undefined, def: any): T {
    return x ? x : def;
}

export function createCubeCSSClass(vars: Props_CubeCSS): string {
    return `
        [ ${propOrDefault(vars.blockClass, '')} ] 
        [ ${propOrDefault(vars.compostClass, '')} ] 
        [ ${propOrDefault(vars.utilClass, '')} ]`;
}