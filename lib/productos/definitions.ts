export type Producto = {
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
    specs: ProductoSpecs[];
}

export type ProductoSpecs = {
    specId: number;
    specName: string;
    specValue: string;
}