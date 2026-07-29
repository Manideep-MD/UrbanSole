import { useContext } from 'react';
import { ThemeContext } from '@utils/theme/ThemeContext';

const useThemeColors = () => useContext(ThemeContext)

export default useThemeColors;
