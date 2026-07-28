import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import { COLORS, CURRENCY_SYMBOL } from '@utils/Constants';
import { ORDERS_TEXT } from '@constants/Orders';
import CustomFlatList from '@components/CustomFlatList/CustomFlatList';

const styles = createStyle(COLORS)

const OrderCard = React.memo(({ item }: any) => (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <View style={styles.orderIconCircle}>
                <Icon name="bag-check-outline" size={18} color={COLORS.accent} />
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

        {item.items.map((lineItem: any, index: number) => (
            <View key={index} style={styles.itemRow}>
                <Text style={styles.itemText} numberOfLines={1}>
                    {lineItem.brand} · Size {lineItem.size} · Qty {lineItem.quantity}
                </Text>
                <Text style={styles.itemPrice}>
                    {CURRENCY_SYMBOL}{(lineItem.cost * lineItem.quantity).toFixed(2)}
                </Text>
            </View>
        ))}

        <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>{ORDERS_TEXT.TOTAL_LABEL}</Text>
            <Text style={styles.totalValue}>{CURRENCY_SYMBOL}{item.total.toFixed(2)}</Text>
        </View>
    </View>
))

const Orders = () => {
    const orders = useSelector((state: any) => state.orders.orders)

    const renderItem = useCallback(({ item }: any) => <OrderCard item={item} />, [])

    if (orders.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <View style={styles.emptyIconCircle}>
                    <Icon name="receipt-outline" size={32} color={COLORS.muted} />
                </View>
                <Text style={styles.emptyTitle}>{ORDERS_TEXT.EMPTY_TITLE}</Text>
                <Text style={styles.emptySubtext}>{ORDERS_TEXT.EMPTY_SUBTEXT}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <CustomFlatList
                data={orders}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                ListHeaderComponent={<Text style={styles.screenTitle}>{ORDERS_TEXT.TITLE}</Text>}
            />
        </View>
    );
};

export default Orders;
