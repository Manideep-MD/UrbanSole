import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@models/index'

export interface AuthState {
    users: User[],
    currentUser: User | null,
}

const initialState: AuthState = {
    users: [],
    currentUser: null,
}

export const authReducers = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SIGN_UP: (state, action: PayloadAction<any>) => {
            const newUser = { id: Date.now().toString(), ...action.payload }
            state.users.push(newUser)
            state.currentUser = newUser
        },
        SIGN_IN: (state, action: PayloadAction<any>) => {
            state.currentUser = action.payload
        },
        LOGOUT: (state) => {
            state.currentUser = null
        },
    },
})

export const { SIGN_UP, SIGN_IN, LOGOUT } = authReducers.actions

export default authReducers.reducer
