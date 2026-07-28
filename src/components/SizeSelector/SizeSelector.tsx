import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import createStyle from './style';
import { COLORS } from '@utils/Constants';

const SizeSelector = ({ sizes, selected, onSelect }: any) => {
    const styles = createStyle(COLORS)

    return (
        <View style={styles.row}>
            {sizes.map((size: number) => {
                const isSelected = selected.includes(size)
                return (
                    <TouchableOpacity
                        key={size}
                        style={[styles.sizeButton, isSelected && styles.sizeButtonSelected]}
                        onPress={() => onSelect(size)}
                    >
                        <Text style={[styles.sizeText, isSelected && styles.sizeTextSelected]}>{size}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
};

export default SizeSelector;
