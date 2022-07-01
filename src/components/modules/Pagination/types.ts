import { Setter } from "../../../types";
import { Props_Element } from "../../types";

export interface Props_Pagination extends Props_Element {
    startSetter: Setter<number>;
    endSetter: Setter<number>;

    count: number;
    start: number;
    end: number;
    dataLen: number;
}