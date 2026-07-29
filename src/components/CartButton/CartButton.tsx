import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import useThemeColors from '@utils/useThemeColors';
import { SCREENS } from '@constants/screenNames';
import { navigate } from '@utils/NavigationUtils';

const CartButton = () => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
    const cartCount = useSelector((state: any) =>
        state.cart.cart.filter((item: any) => item.userId === state.auth.currentUser?.id).length,
    )

    return (
        <TouchableOpacity
            onPress={() => navigate(SCREENS.TABS, { screen: SCREENS.CART })}
            style={styles.cartButton}
        >
            <Icon name="bag-outline" size={22} color={colors.text} />
            {cartCount > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{cartCount}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default CartButton;
