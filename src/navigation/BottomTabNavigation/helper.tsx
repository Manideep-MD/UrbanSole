import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREENS } from '@constants/screenNames';

export const renderTabIcon = (route: any, focused: boolean, color: string, size: number) => {
    let iconName = 'help-outline'

    switch (route.name) {
        case SCREENS.SHOP:
            iconName = focused ? 'home' : 'home-outline'
            break
        case SCREENS.CART:
            iconName = focused ? 'cart' : 'cart-outline'
            break
        case SCREENS.ORDERS:
            iconName = focused ? 'receipt' : 'receipt-outline'
            break
        default:
            iconName = 'help-outline'
            break
    }

    return <Icon name={iconName} size={size} color={color} />
}
