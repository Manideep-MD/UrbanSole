import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import { CURRENCY_SYMBOL } from '@utils/Constants';
import useThemeColors from '@utils/useThemeColors';
import { ORDERS_TEXT } from '@constants/Orders';

const OrderCard = ({ item }: any) => {
    const colors = useThemeColors()
    const styles = createStyle(colors)

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.orderIconCircle}>
                    <Icon name="bag-check-outline" size={18} color={colors.accent} />
                </View>
                <View style={styles.orderHeaderText}>
                    <Text style={styles.orderId}>{ORDERS_TEXT.ORDER_PREFIX}{item.id.slice(-6)}</Text>
                    <Text style={styles.orderDate}>{new Date(item.date).toLocaleDateString()}</Text>
                </View>
                <View style={styles.statusPill}>
                    <Text style={styles.statusText}>{ORDERS_TEXT.STATUS_LABEL}</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {item?.items.map((item: any, index: number) => (
                <View key={index} style={styles.itemRow}>
                    <Text style={styles.itemText} numberOfLines={1}>
                        {item.brand} · Size {item.size} · Qty {item.quantity}
                    </Text>
                    <Text style={styles.itemPrice}>
                        {CURRENCY_SYMBOL}{item.cost * item.quantity}
                    </Text>
                </View>
            ))}

            <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>{ORDERS_TEXT.TOTAL_LABEL}</Text>
                <Text style={styles.totalValue}>{CURRENCY_SYMBOL}{item.total}</Text>
            </View>
        </View>
    );
};

export default React.memo(OrderCard);
