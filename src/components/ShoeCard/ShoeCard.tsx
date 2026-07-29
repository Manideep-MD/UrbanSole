import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import createStyle from './style';
import { CARD_BACKGROUNDS, CURRENCY_SYMBOL } from '@utils/Constants';
import useThemeColors from '@utils/useThemeColors';
import FastImageView from '@components/FastImageView/FastImageView';

const ShoeCard = ({ shoe, onPress, actionLabel, index = 0 }: any) => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
    const bgColor = CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length]

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={[styles.imageWrapper, { backgroundColor: bgColor }]}>
                {shoe.imageUri ? (
                    <FastImageView uri={shoe.imageUri} style={styles.image} />
                ) : (
                    <Text style={styles.placeholderText}>No image</Text>
                )}
            </View>

            <Text style={styles.brand} numberOfLines={1}>{shoe.brand}</Text>

            <View style={styles.footerRow}>
                <Text style={styles.cost}>{CURRENCY_SYMBOL}{shoe.cost}</Text>
                <View style={styles.actionPill}>
                    <Text style={styles.actionText}>{actionLabel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(ShoeCard);
