export interface Shoe {
    id: string;
    brand: string;
    sizes: number[];
    cost: number;
    imageUri?: string;
}

export interface CartItem {
    id: string;
    userId: string;
    shoeId: string;
    size: number;
    quantity: number;
}

export interface OrderItem {
    shoeId: string;
    brand: string;
    size: number;
    quantity: number;
    cost: number;
}

export interface Order {
    id: string;
    userId: string;
    date: string;
    items: OrderItem[];
    total: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
}
