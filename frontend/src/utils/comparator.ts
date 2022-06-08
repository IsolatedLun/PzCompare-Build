import { DT_Diff, DT_Tuple, TupleDict } from "../types";
import { preciseDeci, sum, zeroToDef } from "./funcs";

/**
 * @param x
 * @param y
 * @summary Compares 2 values with the same keys in the order of [x, y] respectively.
*/
export function comparator(objX: DT_Tuple<string, string>, objY: DT_Tuple<string, string>): 
    [DT_Diff, DT_Diff, number, number]
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

    /**
     * @param key
     * @param aVal
     * @param bVal
     * @param arrName - x || y
     * @summary Adds the percent value to it's corresponding array
    */
    function addPercent(key: string, a: number, b: number, arrName: string): void {
        const num = preciseDeci((a / b) * 100);

        if(arrName === 'x') {
            xDiffs[key] = num;
            xAvgPct.push(num);
        }
        else if (arrName === 'y') {
            yDiffs[key] = num;
            yAvgPct.push(num);
        }
    }

    function calcAvgPct2(xArr: number[], yArr: number[], len: number): [number, number] {
        const [xSum, ySum] = [sum(xArr), sum(yArr)];

        let _x = 0;
        let _y = 0;

        if(xSum > ySum)
        _x = preciseDeci(xSum / (len));
        else if(ySum > xSum)
        _y = preciseDeci(ySum / (len));

        console.log(xArr.length, yArr.length)
        return [_x, _y];
}

    let xDiffs: DT_Diff = {};
    let yDiffs: DT_Diff = {};

    let xAvgPct: number[] = [];
    let yAvgPct: number[] = [];
    const toCompare = balanceNumerics(objX, objY);

    let bothTupleDictLen = 0;
    Object.entries(toCompare).forEach(([key, [xVal, yVal]]) => {
        xVal = zeroToDef(xVal, 0.1);
        yVal = zeroToDef(yVal, 0.1);

        if(xVal > yVal) {
            addPercent(key, xVal, yVal, 'x');
        }
        else if (yVal > xVal) {
            addPercent(key, yVal, xVal, 'y');
        }

        bothTupleDictLen++;
    })

    const [xPct, yPct] = calcAvgPct2(xAvgPct, yAvgPct, bothTupleDictLen);  

    return [xDiffs, yDiffs, xPct, yPct];
}
