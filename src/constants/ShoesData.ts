import type { Shoe } from '@models/index'

export const SEED_SHOES: Shoe[] = [
    {
        id: 'seed-1',
        brand: 'Nike Air Max',
        sizes: [7, 8, 9, 10],
        cost: 2500,
        imageUri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    },
    {
        id: 'seed-2',
        brand: 'Adidas Ultraboost',
        sizes: [6, 7, 8, 9, 11],
        cost: 2000,
        imageUri: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80',
    },
    {
        id: 'seed-3',
        brand: 'Converse Chuck Taylor',
        sizes: [5, 6, 7, 8, 9, 10],
        cost: 3000,
        imageUri: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80',
    },
    {
        id: 'seed-4',
        brand: 'Puma RS-X',
        sizes: [8, 9, 10, 12],
        cost: 3500,
        imageUri: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80',
    },
]
