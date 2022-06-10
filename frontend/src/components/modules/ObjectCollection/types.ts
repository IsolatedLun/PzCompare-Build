export interface Props_ObjectCollection {
    categoryName: string;
    subCategories: Props_SubCollection[];
}

export interface Props_SubCollection {
    subCategoryName: string;
    
    objects: string[];
}