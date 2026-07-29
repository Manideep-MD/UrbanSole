import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@constants/screenNames';
import { ADMIN_SHOE_LIST_TEXT } from '@constants/AdminShoeList';
import { ADMIN_SHOE_FORM_TEXT } from '@constants/AdminShoeForm';
import { SHOE_DETAILS_TEXT } from '@constants/ShoeDetails';
import { ROLES } from '@utils/Constants';
import SignIn from '@screens/SignIn/SignIn';
import SignUp from '@screens/SignUp/SignUp';
import AdminShoeList from '@screens/AdminShoeList/AdminShoeList';
import AdminShoeForm from '@screens/AdminShoeForm/AdminShoeForm';
import ShoeDetails from '@screens/ShoeDetails/ShoeDetails';
import OrderSuccess from '@screens/OrderSuccess/OrderSuccess';
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation';
import LogoutButton from '@components/LogoutButton/LogoutButton';
import CartButton from '@components/CartButton/CartButton';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator initialRouteName={SCREENS.SIGN_IN} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.SIGN_IN} component={SignIn} />
        <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
)

const AdminNavigator = () => (
    <Stack.Navigator initialRouteName={SCREENS.ADMIN_SHOE_LIST}>
        <Stack.Screen
            name={SCREENS.ADMIN_SHOE_LIST}
            component={AdminShoeList}
            options={{
                title: ADMIN_SHOE_LIST_TEXT.SCREEN_TITLE,
                headerRight: () => <LogoutButton />,
            }}
        />

        <Stack.Screen
            name={SCREENS.ADMIN_SHOE_FORM}
            component={AdminShoeForm}
            options={({ route }: any) => ({
                title: route?.params?.shoeId ? ADMIN_SHOE_FORM_TEXT.EDIT_TITLE : ADMIN_SHOE_FORM_TEXT.ADD_TITLE,
            })}
        />
    </Stack.Navigator>
)

const ShopperNavigator = () => (
    <Stack.Navigator initialRouteName={SCREENS.TABS}>
        <Stack.Screen name={SCREENS.TABS} component={BottomTabNavigation} options={{ headerShown: false }} />

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
    </Stack.Navigator>
)

const MainStack = () => {
    const currentUser = useSelector((state: any) => state.auth.currentUser)

    if (!currentUser) {
        return <AuthNavigator />
    }

    if (currentUser.role === ROLES.ADMIN) {
        return <AdminNavigator />
    }

    return <ShopperNavigator />
};

export default MainStack;
