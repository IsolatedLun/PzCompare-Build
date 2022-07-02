import React from "react";
import { Filter, Props_CubeCSS, Props_Element } from "../components/types";
import { DT_Object } from "../types";

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
 * @param x
 * @returns 'Louna is my cat' => 'lounaismycat
*/
export function collapseText(x: string): string {
    return x.replace(/\s/gm, '').toLowerCase();
}

/**
 * @param x
 * @returns 'Louna is my cat' => 'Louna Is My Cat'
*/
export function capitalizeText(x: string): string {
    function capitalizeStr(y: string) {
        return y.charAt(0).toUpperCase() + y.slice(1);
    }

    return x.split(' ').map(z => capitalizeStr(z)).join(' ');
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
 * @param def
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
 * @param val
 * @param conditions
 * @summary like typeof() but for multiple types
*/
export function hasTypeof(val: any, conditions: string[]) {
    return conditions.includes(typeof(val));
}

export function isArrNumeric(arr: any[]) {
    let bool = true

    for(let i = 0; i < arr.length; i++) {
        if(Number.isFinite(Number(arr[i])) !== true) {
            bool = false;
            return false;
        } 
    }

    return bool;
}

/**
 * @summary Recursively opens details by taking the id from data-parent-id of the current element
 * The first id always comes from the item itself (<p>) and the other id's are for the detail elements (<details>).
 * p -> details ?-> details ?-> ...
*/
export function openNestedDetails(itemId: string, targetId: string): any {
    const el = document.getElementById(itemId) as HTMLElement;
    
    if(el) {
        const parentId = el.getAttribute('data-parent-id');

        if(parentId) {
            const detailEl = document.getElementById(parentId) as HTMLDetailsElement;

            detailEl.open = true;
            return openNestedDetails(parentId, targetId);
        }

        else {
            document.getElementById(targetId)?.scrollIntoView()
        }
    }

}

/**
 * 
 * @param props 
 * @returns Defaulted props
 */
export function prepareProps<T extends Props_Element>(props: T, extraCls: Props_CubeCSS = {}): T {
    return {
        ...props,
        variant: propOrDefault<string>(props.variant as string, 'default'),
        secondaryVariant: propOrDefault<string>(props.secondaryVariant as string, 'default'),
        blockClass: propOrDefault(props.blockClass, '') + ' ' + propOrDefault(extraCls.blockClass, ''),
        compostClass: propOrDefault(props.compostClass, '') + ' ' + propOrDefault(extraCls.compostClass, ''),
        utilClass: propOrDefault(props.utilClass, '') + ' ' + propOrDefault(extraCls.utilClass, ''),
        id: propOrDefault(props.id, '')
    }
}

/**
 * 
 * @param toSearch
 * @param x 
 * @returns Basic search function
 */
export function strSearch(toSearch: string, x: string): boolean {
    return toSearch.toLowerCase().indexOf(x.toLowerCase()) > -1;
}

/**
 * @param id
*/
export function toggleTargetDropdown(id: string) {
    const el = document.getElementById(id) as HTMLElement;
    const attr = el.getAttribute('data-dropdown-state')

    if(attr === 'true') {
        el.setAttribute('data-dropdown-state', 'false')
    }

    else if(attr === 'false') {
        el.setAttribute('data-dropdown-state', 'true')
    }
} 

/**
 * @param e
 * @param whitelist - Ignores element with same className
*/
export function toggleDropdowns<T extends Event>(e: T, whitelist: string) {
    e.stopPropagation();

    const target = e.target as HTMLElement;
    const dropdowns = document.querySelectorAll('*[data-dropdown-state]');

    // The id of the possibly clicked dropdown
    const ignoreId = propOrDefault(target.closest('.list')?.id, 'NaE')

    if(!target.classList.contains(whitelist)) {
        dropdowns.forEach(el => {
            if(el.id !== ignoreId)
                el.setAttribute('data-dropdown-state', 'false');
            else
                el.setAttribute('data-dropdown-state', 'true');
        });
    }
}

/**
 * @param object
 * @summary Returns false if any data structure in the obj has a len of 0
*/
export function containsEmptyValue(dict: any, ignores: string[]): boolean {
    for(const key in dict) {
        if(dict[key].length === 0 && !ignores.includes(key))
            return false;
    }

    return true;
}

/**
 * @param str
 * @summary Some items have the & char, so its encoded into something that the browser
 * will treat as a normal str 
*/
export function safeUrlEncode(str: string): string {
    return str.replaceAll('&', '/$AMP/')
}

/**
 * @param str
 * @summary Decodes the & char.
*/
export function safeUrlDecode(str: string): string {
    return str.replaceAll('/$AMP/', '&')
}

/**
 * @param objects
 * @param items
 * @param filters
 * @summary Specialized function that filters objects by comparing it to the values in { filters } objects.
 * @returns Filtered array if { filters } has data else returns the items. 
*/
export function filterObjectArr(objects: DT_Object<any>, items: string[], filters: DT_Object<Filter>): string[] 
{
    if(Object.values(filters).length === 0)
        return items;

    const filteredArr: string[] = [];

    items.forEach((item) => {
        for(const key in filters) {
            const cleanKey = capitalizeText(key);

            const objVal = objects[item][cleanKey];
            const cleanVal = capitalizeText(filters[key].value);

            const op = filters[key].op;

            if(isArrNumeric([objVal, cleanVal]) && op.length > 0) {
                if(eval(`Number(objVal) ${op} Number(cleanVal)`)) {
                    filteredArr.push(item);
                }
            }

            else if(objVal === cleanVal) {
                filteredArr.push(item);
            }
        }
    })
    
    return filteredArr;
}