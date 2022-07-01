import { DT_Object, Setter } from "../../../types";

export interface Props_DictionarySearch {
    categoryValue: string;
    showByNamesValue: boolean;
    itemValue: string;

    objects: DT_Object<any>;

    categorySetter: Setter<string>;
    itemSetter: Setter<string>;
    showByNamesSetter: Setter<boolean>;
}

export interface Props_DictionaryCard {
    num: string | number;
    text: string;
}