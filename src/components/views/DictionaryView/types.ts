import { DT_Object, Setter } from "../../../types";
import { KeyValDict } from "../../types";

export interface Props_DictionarySearch {
    categoryValue: string;
    showByNamesValue: boolean;
    itemValue: string;
    filtersValue: any;

    objects: DT_Object<any>;

    categorySetter: Setter<string>;
    itemSetter: Setter<string>;
    showByNamesSetter: Setter<boolean>;
    filtersSetter: Setter<any>;
}

export interface Props_DictionaryCard {
    num: string | number;
    text: string;
}