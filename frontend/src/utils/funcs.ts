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

/**
 * @param x - String
 * @returns 'Louna is my cat' => 'lounaismycat
*/
export function collapseText(x: string): string {
    return x.replace(/\s/gm, '').toLowerCase();
}

export function sum(pctArr: number[]): number {
    try {
        return pctArr.reduce((a, b) => a + b);
    }

    catch {
        return 0;
    }
}

/**
 * @param num
 * @param defValue
 * @summary if the number == 0, then it returns the defValue else number
*/
export function zeroToDef(num: number, def: number): number {
    if(num === 0)
        return def;
    return num;
}

/**
 * @param num
 * @summary Returns the rounded percise version of the number
*/
export function preciseDeci(num: number): number {
    return Number(num.toPrecision(2));
}

/**
 * @param value
 * @param types
 * @summary like typeof() but for multiple types
*/
export function hasTypeof(val: any, conditions: string[]) {
    return conditions.includes(typeof(val));
}