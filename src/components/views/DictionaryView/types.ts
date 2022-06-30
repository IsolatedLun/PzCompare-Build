import { DT_Object, Setter } from "../../../types";

export interface Props_DictionarySearch {
    categoryValue: string;
    showByNamesValue: boolean;

    objects: DT_Object<any>;

    categorySetter: Setter<string>;
    showByNamesSetter: Setter<boolean>;
}

export interface Props_DictionaryCard {
    num: string | number;
    text: string;
}