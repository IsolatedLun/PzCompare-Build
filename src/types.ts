export interface Props_MasterData {
    masterData: {
        objects: DT_Object<any>;
        names: string[];

        categories: DT_Object<any>;
        misc: {
            objectAmt: number;
            categoryAmt: number;
            subCategoryAmt: number;
            modAmt: number;
        }

    }
}

// Datatypes
export type DT_Tuple<T, U> = [T, U];
export type DT_Object<T> = object & { [key: string]: T }

export type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface DT_Diff { [key: string] : number };

export interface TupleDict<T> {
    [key: string]: DT_Tuple<T, T>;
}
