export interface Props_MasterData {
    objects: any;
    names: string[];
}

// Datatypes
export type DT_Tuple<T, U> = [T, U];

export type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface DT_Diff { key: string, pct: number };

export interface TupleDict<T> {
    [key: string]: DT_Tuple<T, T>;
}
