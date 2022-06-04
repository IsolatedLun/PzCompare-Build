export interface Props_ObjectTable {
    direction: 'left' | 'right';
    
    idx: number;

    data?: {
        object: {
            DisplayName: string;
            MaxDamage?: string;
            MinDamage?: string;
        };

        diffs: any;
    }
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