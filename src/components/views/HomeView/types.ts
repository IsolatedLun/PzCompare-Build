import { Props_MasterData, Setter } from "../../../types";

export interface Props_Home {
    masterData: Props_MasterData;
}

export interface Props_MiddleHome {
    xObjVal: string;
    yObjVal: string;
    showDiffs: boolean;

    xObjSetter: Setter<string>;
    yObjSetter: Setter<string>;
    showDiffsSetter: Setter<boolean>;

    compareFunction: Function;
}