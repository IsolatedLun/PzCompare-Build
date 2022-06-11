import { DT_Diff, DT_Object, DT_Tuple } from "../../../types";

export interface Props_ObjectTable {
    direction: 'left' | 'right';
    randomName: string;
    objectName: string;
    
    idx: number;

    onlyShowDiffs: boolean;

    data: Props_Object;
}

export interface Props_Object {
    object: DT_Object<string | number> | any;
    diffs: any;

    avgPct: number;
}

export interface Props_TableRow {
    keyName: string;
    value: string | number;

    pct?: number;
}

export interface Props_ObjectTableHeader {
    name: string;
    avgPct: number;
}