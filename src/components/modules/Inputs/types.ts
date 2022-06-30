import React from "react";
import { KeyValDict, Props_Interactibe } from "../../types";

export interface Props_Input<V> extends Props_Interactibe<React.FormEvent<HTMLInputElement>> {
    placeholder?: string;
    label?: string;
    type: string;
    list?: string;

    value: V;

    hideLabel?: boolean;

    onClearInput?: () => void;
}

export interface Props_CheckboxInput extends Props_Input<boolean> {
    text: string;
}


export interface Props_KeyValueInput extends Props_Interactibe<KeyValDict> {  };