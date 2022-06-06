import { Props_Object } from "../components/modules/Table/types";
import { DT_Diff, DT_Tuple, TupleDict } from "../types";

/**
 * @param x
 * @param y
 * @summary Compares 2 values with the same keys in the order of [x, y] respectively.
*/
export function comparator(objX: DT_Tuple<string, string>, objY: DT_Tuple<string, string>) 
{
    // Loops through the 2 objects and return the keys/attrs that both objects have. 
    function balanceNumerics(x: DT_Tuple<string, string>, y: DT_Tuple<string, string>): TupleDict<number>
    {
        let bothTupleDict: TupleDict<number> = {};

        x.forEach(([key, val]) => {
            if(Number.isInteger(Number(val)))
            bothTupleDict[key] = [Number(val)] as any;
        })

        y.forEach(([key, val]) => {
            if(bothTupleDict[key])
            bothTupleDict[key].push(Number(val))
        })

        return bothTupleDict;
    }

    let xDiffs: DT_Diff[] = [];
    let yDiffs: DT_Diff[] = [];
    const toCompare = balanceNumerics(objX, objY);
    console.log(toCompare)

    Object.entries(toCompare).forEach(([key, [xVal, yVal]]) => {
        console.log(key, xVal, yVal)
    })
}
