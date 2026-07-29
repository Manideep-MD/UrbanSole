import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import createStyle from './style';
import useThemeColors from '@utils/useThemeColors';
import { SCREENS } from '@constants/screenNames';
import { ORDER_SUCCESS_TEXT } from '@constants/OrderSuccess';
import { navigate } from '@utils/NavigationUtils';

const OrderSuccess = () => {
    const colors = useThemeColors()
    const styles = createStyle(colors)

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <LottieView
                source={require('../../assets/lottie/orderSuccess.json')}
                autoPlay
                loop={false}
                style={styles.animation}
            />

            <Text style={styles.heading}>{ORDER_SUCCESS_TEXT.HEADING}</Text>
            <Text style={styles.subtext}>{ORDER_SUCCESS_TEXT.SUBTEXT}</Text>

            <TouchableOpacity
                style={styles.continueButton}
                onPress={() => navigate(SCREENS.TABS, { screen: SCREENS.SHOP })}
            >
                <Text style={styles.continueButtonText}>{ORDER_SUCCESS_TEXT.CONTINUE_SHOPPING}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default OrderSuccess;
