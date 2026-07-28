import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import createStyle from './style';
import { COLORS } from '@utils/Constants';
import { SCREENS } from '@constants/screenNames';
import { COMMON_TEXT } from '@constants/common';
import { navigate } from '@utils/NavigationUtils';

const SwitchRoleButton = () => {
    const styles = createStyle(COLORS)

    return (
        <TouchableOpacity onPress={() => navigate(SCREENS.ROLE_SELECT)} style={styles.headerButton}>
            <Text style={styles.switchRoleText}>{COMMON_TEXT.SWITCH_ROLE}</Text>
        </TouchableOpacity>
    )
}

export default SwitchRoleButton;
