import React from 'react';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useThemeColors from '@utils/useThemeColors';
import { SCREENS } from '@constants/screenNames';
import { SHOP_TEXT } from '@constants/Shop';
import Shop from '@screens/Shop/Shop';
import Cart from '@screens/Cart/Cart';
import Orders from '@screens/Orders/Orders';
import LogoutButton from '@components/LogoutButton/LogoutButton';
import { renderTabIcon } from './helper';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const colors = useThemeColors()
    const insets = useSafeAreaInsets()
    const cartCount = useSelector((state: any) =>
        state.cart.cart.filter((item: any) => item.userId === state.auth.currentUser?.id).length,
    )

    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarBadgeStyle: { backgroundColor: colors.danger },
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60 + insets.bottom,
                    paddingTop: 6,
                    paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
                },
                headerRight: () => <LogoutButton />,
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
