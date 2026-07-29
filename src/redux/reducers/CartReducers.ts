import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CartItem } from '@models/index'

export interface CartState {
    cart: CartItem[],
}

const initialState: CartState = {
    cart: [],
}

export const cartReducers = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action: PayloadAction<any>) => {
            const { userId, shoeId, size, quantity } = action.payload
            const existingItem = state.cart.find(
                (item: any) => item.userId === userId && item.shoeId === shoeId && item.size === size,
            )

            if (existingItem) {
                existingItem.quantity = quantity
            } else {
                state.cart.push({ id: Date.now().toString(), userId, shoeId, size, quantity })
            }
        },
        REMOVE_FROM_CART: (state, action: PayloadAction<any>) => {
            state.cart = state.cart.filter((item: any) => item.id !== action.payload)
        },
        INCREASE_QUANTITY: (state, action: PayloadAction<any>) => {
            const item = state.cart.find((cartItem: any) => cartItem.id === action.payload)
            if (item) {
                item.quantity += 1
            }
        },
        DECREASE_QUANTITY: (state, action: PayloadAction<any>) => {
            const item = state.cart.find((cartItem: any) => cartItem.id === action.payload)
            if (!item) {
                return
            }
            if (item.quantity > 1) {
                item.quantity -= 1
            } else {
                state.cart = state.cart.filter((cartItem: any) => cartItem.id !== action.payload)
            }
        },
        CLEAR_CART: (state, action: PayloadAction<any>) => {
            state.cart = state.cart.filter((item: any) => item.userId !== action.payload)
        },
        REMOVE_SHOE_FROM_CART: (state, action: PayloadAction<any>) => {
            state.cart = state.cart.filter((item: any) => item.shoeId !== action.payload)
        },
    },
})

export const {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_CART,
    REMOVE_SHOE_FROM_CART,
} = cartReducers.actions

export default cartReducers.reducer
