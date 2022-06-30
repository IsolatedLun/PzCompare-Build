import React, { HTMLAttributes, ReactChildren } from "react";

export interface Props_CubeCSS {
    blockClass?: string;
    compostClass?: string;
    utilClass?: string;
}


export interface KeyValDict  {
    keyName: any;
    value: any
}

export interface Props_Variant {
    variant?: string | number | boolean;
    secondaryVariant?: string;
}

export interface Props_Children {
    children?: React.ReactNode;
}

export interface Props_Aria {
    ariaLabel: string;
}

export interface Props_Element extends Props_Children, Props_CubeCSS, Props_Variant { 
    id?: string;
};

export interface Props_AriaElement extends Props_Element, Props_Aria { 
    notUseDefaultCls?: boolean;
 };

export interface Props_Interactibe<E> extends Props_Element {
    onInteract?: (e: E) => void;
}