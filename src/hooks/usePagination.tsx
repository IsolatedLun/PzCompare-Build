import { useEffect, useState } from "react";
import { Setter } from "../types";
import { strSearch } from "../utils/funcs";

export function usePagination<T>(data: T[], count: number, textFilter: string): 
[T[], Setter<number>, Setter<number>, number, number, [number, number]] 
{
    const [currentItems, setCurrentItems] = useState<T[]>([]);
    const [len, setLen] = useState(currentItems.length)

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(count)

    useEffect(() => {
        let _data = [] as any;
        let filteredData = [] as any;

        if(textFilter.length > 0) {
            filteredData = data.filter(item => strSearch(item as any, textFilter));
            _data = filteredData.slice(start, end);

            setLen(filteredData.length);
        }
            
        else {
            _data = data.slice(start, end);
            setLen(data.length);
        }
        

        setCurrentItems(_data);
        
    }, [start, end, textFilter])

    return [ currentItems, setStart, setEnd, count, len, [start, end] ];
}