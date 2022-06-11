import React from "react";
import { Props_Interactibe } from "../../types";

export interface Props_Input<V> extends Props_Interactibe<React.FormEvent<HTMLInputElement>> {
    placeholder?: string;
    value: V;
    type: string;

    onClearInput?: () => void;
}

export interface Props_CheckboxInput extends Props_Input<boolean> {
    text: string;
}