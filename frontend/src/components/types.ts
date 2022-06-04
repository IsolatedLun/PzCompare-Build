export interface Props_CubeCSS {
    blockClass?: string;
    compostClass?: string;
    utilClass?: string;
}

export interface Props_Variant {
    variant?: string;
    secondaryVariant?: string;
}

export interface Props_Interactibe<E> extends Props_CubeCSS, Props_Variant {
    onInteract?: (e: E) => void;
}