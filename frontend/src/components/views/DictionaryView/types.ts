import { DT_Object, Setter } from "../../../types";

export interface Props_DictionarySearch {
    categoryValue: string;

    objects: DT_Object<any>;

    categorySetter: Setter<string>;
}

export interface Props_DictionaryCard {
    num: string | number;
    text: string;
}