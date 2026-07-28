import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import { COLORS, CARD_BACKGROUNDS } from '@utils/Constants';
import { SCREENS } from '@constants/screenNames';
import { ROLE_SELECT_TEXT } from '@constants/RoleSelect';
import { navigate } from '@utils/NavigationUtils';

const RoleSelect = () => {
    const styles = createStyle(COLORS)

    return (
        <View style={styles.container}>
            <View style={styles.logoBadge}>
                <Icon name="footsteps" size={32} color={COLORS.background} />
            </View>
            <Text style={styles.title}>{ROLE_SELECT_TEXT.TITLE}</Text>
            <Text style={styles.subtitle}>{ROLE_SELECT_TEXT.SUBTITLE}</Text>

            <TouchableOpacity
                style={[styles.card, { backgroundColor: CARD_BACKGROUNDS[0] }]}
                onPress={() => navigate(SCREENS.ADMIN_SHOE_LIST)}
            >
                <View style={styles.iconCircle}>
                    <Icon name="construct" size={22} color={COLORS.dark} />
                </View>
                <View style={styles.cardTextWrap}>
                    <Text style={styles.cardTitle}>{ROLE_SELECT_TEXT.ADMIN_TITLE}</Text>
                    <Text style={styles.cardText}>{ROLE_SELECT_TEXT.ADMIN_DESCRIPTION}</Text>
                </View>
                <Icon name="chevron-forward" size={20} color={COLORS.dark} />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.card, { backgroundColor: CARD_BACKGROUNDS[2] }]}
                onPress={() => navigate(SCREENS.TABS)}
            >
                <View style={styles.iconCircle}>
                    <Icon name="bag-handle" size={22} color={COLORS.dark} />
                </View>
                <View style={styles.cardTextWrap}>
                    <Text style={styles.cardTitle}>{ROLE_SELECT_TEXT.SHOPPER_TITLE}</Text>
                    <Text style={styles.cardText}>{ROLE_SELECT_TEXT.SHOPPER_DESCRIPTION}</Text>
                </View>
                <Icon name="chevron-forward" size={20} color={COLORS.dark} />
            </TouchableOpacity>
        </View>
    );
};

export default RoleSelect;
