import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Shoe } from '@models/index'
import { SEED_SHOES } from '@constants/ShoesData'

export interface ShoesState {
    shoes: Shoe[],
}

const initialState: ShoesState = {
    shoes: SEED_SHOES,
}

export const shoesReducers = createSlice({
    name: 'shoes',
    initialState,
    reducers: {
        ADD_SHOE: (state, action: PayloadAction<any>) => {
            state.shoes.push(action.payload)
            console.log('shoe added', action.payload)
        },
        UPDATE_SHOE: (state, action: PayloadAction<any>) => {
            const index = state.shoes.findIndex((item: any) => item.id === action.payload.id)
            if (index !== -1) {
                state.shoes[index] = action.payload
            }
        },
        DELETE_SHOE: (state, action: PayloadAction<any>) => {
            state.shoes = state.shoes.filter((shoe: any) => shoe.id !== action.payload)
        },
    },
})

export const { ADD_SHOE, UPDATE_SHOE, DELETE_SHOE } = shoesReducers.actions

export default shoesReducers.reducer
