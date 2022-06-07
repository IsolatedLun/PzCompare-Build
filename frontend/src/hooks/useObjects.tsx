import { useState } from "react";
import { Props_Object } from "../components/modules/Table/types";
import { Setter } from "../types";
import { comparator } from "../utils/comparator";

export function useObjects(objects: any): 
[
    [string, string, Setter<string>, Setter<string>], 
    [Setter<Props_Object>, Setter<Props_Object>, Function],
    [Props_Object, Props_Object]
] 
{
    function compareObjects() {
        if(xObjText.length > 0 && yObjText.length > 0) {
          if(objects[xObjText] && objects[yObjText]) {
            const [xDiffs, yDiffs] = comparator(objects[xObjText], objects[yObjText]);

            setXObj({ object: objects[xObjText], diffs: xDiffs });
            setYObj({ object: objects[yObjText], diffs: yDiffs });
          }
        }
    }

    const [xObjText, setXObjText] = useState('');
    const [yObjText, setYObjText] = useState('');

    const [xObj, setXObj] = useState<Props_Object>({
        object: [],
        diffs: {}
    });
    
    const [yObj, setYObj] = useState<Props_Object>({
        object: [],
        diffs: {}
    });

    return [
        [xObjText, yObjText, setXObjText, setYObjText],
        [setXObj, setYObj, compareObjects],
        [xObj, yObj]
    ]
}