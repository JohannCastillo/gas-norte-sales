export type Product = {
    product_id: number
    title: string
    category: string;
    discounted: number;
    price: number;
    name: string;
    description: string;
    brand: string;
    imageURL: string;
    stock: number;
    seller: string;
    specs: ProductSpecs[];
}

export type ProductSpecs = {
    specId: number;
    specName: string;
    specValue: string;
}