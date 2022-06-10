import { DT_Diff, DT_Tuple, TupleDict } from "../types";
import { preciseDeci, sum, zeroToDef } from "./funcs";

/**
 * @param x
 * @param y
 * @summary Compares 2 values with the same keys in the order of [x, y] respectively.
*/
export function comparator(objX: any, objY: any): 
    [DT_Diff, DT_Diff, number, number]
{
    // Loops through the 2 objects and return the keys/attrs that both objects have. 
    function balanceNumerics(): TupleDict<number>
    {
        let bothTupleDict: TupleDict<number> = {};

        Object.keys(objX).forEach((key) => {
            const val = Number(objX[key]);

            if(Number.isFinite(val))
                bothTupleDict[key] = [val] as any;
        })

        Object.keys(objY).forEach((key) => {
            const val = Number(objY[key]);
            
            if(Number.isFinite(val) && bothTupleDict[key])
                bothTupleDict[key].push(val);
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

        return [_x, _y];
}

    let xDiffs: DT_Diff = {};
    let yDiffs: DT_Diff = {};

    let xAvgPct: number[] = [];
    let yAvgPct: number[] = [];
    const toCompare = balanceNumerics();

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
