import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import createStyle from './style';
import { COLORS } from '@utils/Constants';

const QuantityStepper = ({ quantity, onIncrease, onDecrease, min = 1, blockAtMin = true }: any) => {
    const styles = createStyle(COLORS)
    const decreaseDisabled = blockAtMin && quantity <= min

    return (
        <View style={styles.row}>
            <TouchableOpacity
                style={[styles.button, decreaseDisabled && styles.buttonDisabled]}
                onPress={onDecrease}
                disabled={decreaseDisabled}
            >
                <Icon name="remove" size={16} color={COLORS.text} />
            </TouchableOpacity>

            <Text style={styles.value}>{quantity}</Text>

            <TouchableOpacity style={styles.button} onPress={onIncrease}>
                <Icon name="add" size={16} color={COLORS.text} />
            </TouchableOpacity>
        </View>
    );
};

export default QuantityStepper;
