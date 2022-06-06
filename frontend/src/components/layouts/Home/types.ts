import { Props_MasterData, Setter } from "../../../types";

export interface Props_Home {
    masterData: Props_MasterData;
}

export interface Props_MiddleHome {
    xObjVal: string;
    yObjVal: string;

    xObjSetter: Setter<string>;
    yObjSetter: Setter<string>;
    compareFunction: Function;
}