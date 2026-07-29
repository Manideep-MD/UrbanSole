import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import createStyle from './style';
import useThemeColors from '@utils/useThemeColors';
import { COMMON_TEXT } from '@constants/common';
import { LOGOUT } from '@redux/reducers/AuthReducers';

const LogoutButton = () => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={() => dispatch(LOGOUT())} style={styles.headerButton}>
            <Text style={styles.logoutText}>{COMMON_TEXT.LOGOUT}</Text>
        </TouchableOpacity>
    )
}

export default LogoutButton;
