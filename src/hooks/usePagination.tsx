import { useEffect, useState } from "react";
import { DT_Object, Setter } from "../types";
import { filterObjectArr, strSearch } from "../utils/funcs";

/**
 * @param objects
 * @param data
 * @param count
 * @param textFilter
 * @param objFilters
 * @summary A very specialized pagination hook that can filter objects too.
*/
export function usePagination<T>(objects: DT_Object<any>, data: T[], count: number, 
    textFilter: string, objFilters: any): 
[T[], Setter<number>, Setter<number>, number, number, [number, number]] 
{
    const [currentItems, setCurrentItems] = useState<T[]>([]);
    const [len, setLen] = useState(currentItems.length)

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(count);

    useEffect(() => {
        let _data = data as any;
        let filteredData = [] as any;

        if(textFilter.length > 0 || Object.values(objFilters).length > 0) {
            // First filters by text
            filteredData = data.filter(item => strSearch(item as any, textFilter));

            // Then filters by the object filters.
            filteredData = filterObjectArr(objects, filteredData, objFilters);

            _data = filteredData.slice(start, end);

            setLen(filteredData.length);
        }
            
        else {
            _data = data.slice(start, end);
            setLen(data.length);
        }
        
        setCurrentItems(_data);
        
    }, [start, end, textFilter, objFilters])

    return [ currentItems, setStart, setEnd, count, len, [start, end] ];
}