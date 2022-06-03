export interface Props_ObjectTable {
    direction: 'left' | 'right';
    
    object: {
        DisplayName: string;
        MaxDamage?: string;
        MinDamage?: string;
    };
    diffs: any;
}

export interface Props_TableRow {
    keyName: string;
    value: string | number;
    pct?: number;
}