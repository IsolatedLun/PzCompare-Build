import { Props_CubeCSS } from "../components/types";

/**
 * @param x - Object
 * @param path - String path
 * @def - Default return value
*/
export function objGet(x: object, path: string, def: any) {
   
    try {
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

export function randomArrLen(maxLen: number): number {
    const buff = new Uint32Array(10);

    return crypto.getRandomValues(buff)[new Date().getMinutes() % 10] % maxLen;
}

export function collapseText(x: string): string {
    return x.replace(/\s/gm, '').toLowerCase();
}