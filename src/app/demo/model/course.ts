export interface Courses {
    id?: string;
    authorName?: string;
    title?: string;
    description?: string;
    actualPrice?: number;
    discountPercentage?: number;
    wishlist?: boolean;
    cart?: boolean;
    image?: string;
    afterDiscount:number
    category?:string
}