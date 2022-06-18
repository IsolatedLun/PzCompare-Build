import React from "react";
import { Props_Interactibe } from "../../types";

export interface Props_Button<E> extends Props_Interactibe<React.FormEvent<E>> {
    children: any;
    ariaLabel?: string;

    workCondition?: boolean;
}

export interface Props_LinkButton extends Props_Button<HTMLAnchorElement> {
    to: string;
}