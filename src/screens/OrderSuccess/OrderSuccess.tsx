import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import createStyle from './style';
import { COLORS } from '@utils/Constants';
import { SCREENS } from '@constants/screenNames';
import { ORDER_SUCCESS_TEXT } from '@constants/OrderSuccess';
import { navigate } from '@utils/NavigationUtils';

const OrderSuccess = () => {
    const styles = createStyle(COLORS)

    return (
        <View style={styles.container}>
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
        </View>
    );
};

export default OrderSuccess;
