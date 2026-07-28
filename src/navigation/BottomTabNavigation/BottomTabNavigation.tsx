import React from 'react';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '@utils/Constants';
import { SCREENS } from '@constants/screenNames';
import { SHOP_TEXT } from '@constants/Shop';
import Shop from '@screens/Shop/Shop';
import Cart from '@screens/Cart/Cart';
import Orders from '@screens/Orders/Orders';
import SwitchRoleButton from '@components/SwitchRoleButton/SwitchRoleButton';
import { renderTabIcon } from './helper';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const cartCount = useSelector((state: any) => state.cart.cart.length)

    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                tabBarActiveTintColor: COLORS.primary,
                tabBarBadgeStyle: { backgroundColor: COLORS.danger },
                headerRight: () => <SwitchRoleButton />,
                tabBarIcon: ({ focused, color, size }: any) => renderTabIcon(route, focused, color, size),
            })}
        >
            <Tab.Screen
                name={SCREENS.SHOP}
                component={Shop}
                options={{ title: SHOP_TEXT.TAB_LABEL, headerShown: false }}
            />
            <Tab.Screen
                name={SCREENS.CART}
                component={Cart}
                options={{ tabBarBadge: cartCount > 0 ? cartCount : undefined }}
            />
            <Tab.Screen name={SCREENS.ORDERS} component={Orders} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
