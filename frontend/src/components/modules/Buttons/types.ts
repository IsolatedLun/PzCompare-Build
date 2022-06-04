import React from "react";
import { Props_Interactibe } from "../../types";

export interface Props_Button extends Props_Interactibe<React.FormEvent<HTMLButtonElement>> {
    children: any;
    ariaLabel?: string;
}