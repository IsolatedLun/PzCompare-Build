import { DT_Diff, DT_Tuple, TupleDict } from "../types";

/**
 * @param x
 * @param y
 * @summary Compares 2 values with the same keys in the order of [x, y] respectively.
*/
export function comparator(objX: DT_Tuple<string, string>, objY: DT_Tuple<string, string>): [DT_Diff, DT_Diff]
{
    // Loops through the 2 objects and return the keys/attrs that both objects have. 
    function balanceNumerics(x: DT_Tuple<string, string>, y: DT_Tuple<string, string>): TupleDict<number>
    {
        let bothTupleDict: TupleDict<number> = {};

        x.forEach(([key, val]) => {
            if(Number.isFinite(Number(val)))
            bothTupleDict[key] = [Number(val)] as any;
        })

        y.forEach(([key, val]) => {
            if(bothTupleDict[key])
            bothTupleDict[key].push(Number(val))
        })

        return bothTupleDict;
    }

    let xDiffs: DT_Diff = {};
    let yDiffs: DT_Diff = {};
    const toCompare = balanceNumerics(objX, objY);

    Object.entries(toCompare).forEach(([key, [xVal, yVal]]) => {
        xVal = xVal === 0 ? 0.1 : xVal;
        yVal = yVal === 0 ? 0.1 : yVal;

        if(xVal > yVal)
            xDiffs[key] = Number(((xVal / yVal) * 100).toPrecision(2));
        else if (yVal > xVal)
            yDiffs[key] = Number(((yVal / xVal) * 100).toPrecision(2));
    })


    return [xDiffs, yDiffs];
}
