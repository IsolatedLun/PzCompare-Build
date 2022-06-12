export interface Props_CubeCSS {
    blockClass?: string;
    compostClass?: string;
    utilClass?: string;
}

export interface Props_Variant {
    variant?: string | number | boolean;
    secondaryVariant?: string;
}

export interface Props_Children {
    children: any;
}

export interface Props_Aria {
    ariaLabel: string;
}

export interface Props_Element extends Props_Children, Props_CubeCSS, Props_Variant {  };
export interface Props_AriaElement extends Props_Element, Props_Aria {  };

export interface Props_Interactibe<E> extends Props_Element {
    onInteract?: (e: E) => void;
}