import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import createStyle from './style';
import { CARD_BACKGROUNDS, CURRENCY_SYMBOL } from '@utils/Constants';
import useThemeColors from '@utils/useThemeColors';
import { SHOE_DETAILS_TEXT } from '@constants/ShoeDetails';
import SizeSelector from '@components/SizeSelector/SizeSelector';
import FastImageView from '@components/FastImageView/FastImageView';
import QuantityStepper from '@components/QuantityStepper/QuantityStepper';
import { ADD_TO_CART } from '@redux/reducers/CartReducers';
import { SCREENS } from '@constants/screenNames';
import { navigate } from '@utils/NavigationUtils';

const ShoeDetails = ({ route }: any) => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
    const dispatch = useDispatch()
    const shoeId = route?.params?.shoeId
    const shoe = useSelector((state: any) => state.shoes.shoes.find((item: any) => item.id === shoeId))
    const currentUser = useSelector((state: any) => state.auth.currentUser)
    const cartItems = useSelector((state: any) =>
        state.cart.cart.filter((item: any) => item.userId === currentUser?.id),
    )

    const [size, setSize] = useState<number | null>(() => {
        const existing = cartItems.find((item: any) => item.shoeId === shoeId)
        return existing ? existing.size : null
    })

    // Seeded from the cart so re-opening this screen shows what you already added,
    // but once you start adjusting it, switching sizes leaves it untouched.
    const [quantity, setQuantity] = useState<number>(() => {
        const existing = cartItems.find((item: any) => item.shoeId === shoeId)
        return existing ? existing.quantity : 1
    })

    if (!shoe) {
        return null
    }

    const handleAddToCart = () => {
        if (size === null) {
            return
        }
        dispatch(ADD_TO_CART({ userId: currentUser?.id, shoeId: shoe.id, size, quantity }))
        navigate(SCREENS.TABS, { screen: SCREENS.SHOP })
    }

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={[styles.imageWrapper, { backgroundColor: CARD_BACKGROUNDS[1] }]}>
                {shoe.imageUri ? (
                    <FastImageView uri={shoe.imageUri} style={styles.image} />
                ) : (
                    <Text style={styles.placeholderText}>No image</Text>
                )}
            </View>

            <Text style={styles.brand}>{shoe.brand}</Text>
            <Text style={styles.cost}>{CURRENCY_SYMBOL}{shoe.cost}</Text>

            <Text style={styles.label}>{SHOE_DETAILS_TEXT.STOCK_LABEL}</Text>
            <SizeSelector sizes={shoe.sizes} selected={size !== null ? [size] : []} onSelect={setSize} />

            <Text style={styles.label}>{SHOE_DETAILS_TEXT.QUANTITY_LABEL}</Text>
            <QuantityStepper
                quantity={quantity}
                onIncrease={() => setQuantity(current => current + 1)}
                onDecrease={() => setQuantity(current => Math.max(1, current - 1))}
            />

            <Text style={styles.description}>{SHOE_DETAILS_TEXT.DESCRIPTION}</Text>

            <TouchableOpacity
                style={[styles.addToCartButton, size === null && styles.addToCartButtonDisabled]}
                disabled={size === null}
                onPress={handleAddToCart}
            >
                <Text style={styles.addToCartButtonText}>{SHOE_DETAILS_TEXT.ADD_TO_CART}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ShoeDetails;
