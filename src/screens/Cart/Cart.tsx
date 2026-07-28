import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import createStyle from './style';
import { COLORS, CURRENCY_SYMBOL } from '@utils/Constants';
import { CART_TEXT } from '@constants/Cart';
import { SCREENS } from '@constants/screenNames';
import { REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_CART } from '@redux/reducers/CartReducers';
import { ADD_ORDER } from '@redux/reducers/OrdersReducers';
import QuantityStepper from '@components/QuantityStepper/QuantityStepper';
import CustomFlatList from '@components/CustomFlatList/CustomFlatList';
import { navigate } from '@utils/NavigationUtils';

const findShoe = (shoes: any, shoeId: any) => shoes.find((item: any) => item.id === shoeId)

const styles = createStyle(COLORS)

const CartRow = React.memo(({ item, shoe, onRemove, onIncrease, onDecrease }: any) => {
    return (
        <View style={styles.row}>
            <View style={styles.info}>
                <Text style={styles.brand}>{shoe.brand}</Text>
                <Text style={styles.details}>Size {item.size}</Text>
                <Text style={styles.details}>{CURRENCY_SYMBOL}{(shoe.cost * item.quantity).toFixed(2)}</Text>
                <View style={styles.quantityRow}>
                    <QuantityStepper
                        quantity={item.quantity}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                        blockAtMin={false}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
                <Text style={styles.removeText}>{CART_TEXT.REMOVE_LABEL}</Text>
            </TouchableOpacity>
        </View>
    )
})

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: any) => state.cart.cart)
    const shoes = useSelector((state: any) => state.shoes.shoes)

    let total = 0
    cartItems.forEach((item: any) => {
        const shoe = findShoe(shoes, item.shoeId)
        if (shoe) {
            total += shoe.cost * item.quantity
        }
    })

    const handlePlaceOrder = () => {
        const orderItems = cartItems
            .map((item: any) => {
                const shoe = findShoe(shoes, item.shoeId)
                if (!shoe) {
                    return null
                }
                return {
                    shoeId: shoe.id,
                    brand: shoe.brand,
                    size: item.size,
                    quantity: item.quantity,
                    cost: shoe.cost,
                }
            })
            .filter((item: any) => item !== null)

        dispatch(ADD_ORDER({
            id: Date.now().toString(),
            date: new Date().toISOString(),
            items: orderItems,
            total,
        }))
        dispatch(CLEAR_CART())
        navigate(SCREENS.ORDER_SUCCESS)
    }

    const renderItem = useCallback(({ item }: any) => {
        const shoe = findShoe(shoes, item.shoeId)
        if (!shoe) {
            return null
        }
        return (
            <CartRow
                item={item}
                shoe={shoe}
                onRemove={() => dispatch(REMOVE_FROM_CART(item.id))}
                onIncrease={() => dispatch(INCREASE_QUANTITY(item.id))}
                onDecrease={() => dispatch(DECREASE_QUANTITY(item.id))}
            />
        )
    }, [shoes, dispatch])

    return (
        <View style={styles.container}>
            <CustomFlatList
                data={cartItems}
                renderItem={renderItem}
                emptyText={CART_TEXT.EMPTY_TEXT}
                emptyTextStyle={styles.emptyText}
            />

            <View style={styles.footer}>
                <Text style={styles.totalText}>{CART_TEXT.TOTAL_LABEL}: {CURRENCY_SYMBOL}{total.toFixed(2)}</Text>
                <TouchableOpacity
                    style={[styles.buyButton, cartItems.length === 0 && styles.buyButtonDisabled]}
                    disabled={cartItems.length === 0}
                    onPress={handlePlaceOrder}
                >
                    <Text style={styles.buyButtonText}>{CART_TEXT.PLACE_ORDER_LABEL}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
