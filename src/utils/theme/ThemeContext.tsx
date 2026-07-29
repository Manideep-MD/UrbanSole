import React, { createContext } from 'react';
import { COLORS } from '@utils/Constants';

export const ThemeContext = createContext(COLORS)

export const ThemeProvider = ({ children }: any) => {
    return (
        <ThemeContext.Provider value={COLORS}>
            {children}
        </ThemeContext.Provider>
    )
}
