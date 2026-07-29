import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Order } from '@models/index'

export interface OrdersState {
    orders: Order[],
}

const initialState: OrdersState = {
    orders: [],
}

export const ordersReducers = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        ADD_ORDER: (state, action: PayloadAction<any>) => {
            state.orders.push(action.payload)
        },
    },
})

export const { ADD_ORDER } = ordersReducers.actions

export default ordersReducers.reducer
