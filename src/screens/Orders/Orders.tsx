import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import useThemeColors from '@utils/useThemeColors';
import { ORDERS_TEXT } from '@constants/Orders';
import OrderCard from '@components/OrderCard/OrderCard';

const Orders = () => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
    const currentUser = useSelector((state: any) => state.auth.currentUser)
    const orders = useSelector((state: any) =>
        state.orders.orders.filter((order: any) => order.userId === currentUser?.id),
    )

    const renderItem = useCallback(({ item }: any) => <OrderCard item={item} />, [])

    if (orders.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <View style={styles.emptyIconCircle}>
                    <Icon name="receipt-outline" size={32} color={colors.muted} />
                </View>
                <Text style={styles.emptyTitle}>{ORDERS_TEXT.EMPTY_TITLE}</Text>
                <Text style={styles.emptySubtext}>{ORDERS_TEXT.EMPTY_SUBTEXT}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Text style={styles.screenTitle}>{ORDERS_TEXT.TITLE}</Text>}
            />
        </View>
    );
};

export default Orders;
