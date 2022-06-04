import React from "react";
import { Props_Interactibe } from "../../types";

export interface Props_Input extends Props_Interactibe<React.FormEvent<HTMLInputElement>> {
    placeholder?: string;
}