import { DT_Object } from "../../../types";

export interface Props_ObjectCollection {
    categoryName: string;
    subCategories: Props_SubCollection[];
}

export interface Props_SubCollection {
    subCategoryName: string;
    parentId: string;
    
    objects: Props_SubCollectionItem[];
}

export interface Props_SubCollectionItem {
    x: string;
    z: string;

    subParentId: string;
}