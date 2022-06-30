import { useState } from "react";
import { Props_Object } from "../components/modules/Table/types";
import { DT_Object, Setter } from "../types";
import { comparator } from "../utils/comparator";
import { collapseText } from "../utils/funcs";

export function useObjects(objects: DT_Object<any>): 
[
    [string, string, Setter<string>, Setter<string>], 
    [Setter<Props_Object>, Setter<Props_Object>, Function],
    [Props_Object, Props_Object]
] 
{
    function compareObjects() {
        if(xObjText.length > 0 && yObjText.length > 0) {
          if(objects[xObjText] && objects[yObjText]) {
            const [xDiffs, yDiffs, xPct, yPct] = comparator(objects[xObjText], objects[yObjText]);

            setXObj({ object: objects[xObjText], diffs: xDiffs, avgPct: xPct });
            setYObj({ object: objects[yObjText], diffs: yDiffs, avgPct: yPct });
          }
        }
    }

    const [xObjText, setXObjText] = useState('');
    const [yObjText, setYObjText] = useState('');

    const [xObj, setXObj] = useState<Props_Object>({
        object: [],
        diffs: {},
        avgPct: 0
    });
    
    const [yObj, setYObj] = useState<Props_Object>({
        object: [],
        diffs: {},
        avgPct: 0
    });

    return [
        [xObjText, yObjText, setXObjText, setYObjText],
        [setXObj, setYObj, compareObjects],
        [xObj, yObj]
    ]
}