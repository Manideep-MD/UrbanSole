import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import { COLORS } from '@utils/Constants';
import { SCREENS } from '@constants/screenNames';
import { navigate } from '@utils/NavigationUtils';

const CartButton = () => {
    const styles = createStyle(COLORS)
    const cartCount = useSelector((state: any) => state.cart.cart.length)

    return (
        <TouchableOpacity
            onPress={() => navigate(SCREENS.TABS, { screen: SCREENS.CART })}
            style={styles.cartButton}
        >
            <Icon name="bag-outline" size={22} color={COLORS.text} />
            {cartCount > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{cartCount}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default CartButton;
