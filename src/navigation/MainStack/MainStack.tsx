import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@constants/screenNames';
import { ADMIN_SHOE_LIST_TEXT } from '@constants/AdminShoeList';
import { ADMIN_SHOE_FORM_TEXT } from '@constants/AdminShoeForm';
import { SHOE_DETAILS_TEXT } from '@constants/ShoeDetails';
import RoleSelect from '@screens/RoleSelect/RoleSelect';
import AdminShoeList from '@screens/AdminShoeList/AdminShoeList';
import AdminShoeForm from '@screens/AdminShoeForm/AdminShoeForm';
import ShoeDetails from '@screens/ShoeDetails/ShoeDetails';
import OrderSuccess from '@screens/OrderSuccess/OrderSuccess';
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation';
import SwitchRoleButton from '@components/SwitchRoleButton/SwitchRoleButton';
import CartButton from '@components/CartButton/CartButton';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.ROLE_SELECT}>
            <Stack.Screen
                name={SCREENS.ROLE_SELECT}
                component={RoleSelect}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={SCREENS.ADMIN_SHOE_LIST}
                component={AdminShoeList}
                options={{
                    title: ADMIN_SHOE_LIST_TEXT.SCREEN_TITLE,
                    headerRight: () => <SwitchRoleButton />,
                }}
            />

            <Stack.Screen
                name={SCREENS.ADMIN_SHOE_FORM}
                component={AdminShoeForm}
                options={({ route }: any) => ({
                    title: route.params?.shoeId ? ADMIN_SHOE_FORM_TEXT.EDIT_TITLE : ADMIN_SHOE_FORM_TEXT.ADD_TITLE,
                })}
            />

            <Stack.Screen
                name={SCREENS.SHOE_DETAILS}
                component={ShoeDetails}
                options={{
                    title: SHOE_DETAILS_TEXT.SCREEN_TITLE,
                    headerRight: () => <CartButton />,
                }}
            />

            <Stack.Screen
                name={SCREENS.ORDER_SUCCESS}
                component={OrderSuccess}
                options={{ headerShown: false, gestureEnabled: false }}
            />

            <Stack.Screen name={SCREENS.TABS} component={BottomTabNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default MainStack;
