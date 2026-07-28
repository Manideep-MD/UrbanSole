import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        list: {
            padding: 16,
            flexGrow: 1,
        },
        screenTitle: {
            fontSize: 20,
            fontWeight: '700',
            color: colors.text,
            marginBottom: 16,
        },
        emptyContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
        },
        emptyIconCircle: {
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: colors.border,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
        },
        emptyTitle: {
            fontSize: 16,
            fontWeight: '700',
            color: colors.text,
            marginBottom: 4,
        },
        emptySubtext: {
            fontSize: 13,
            color: colors.muted,
            textAlign: 'center',
        },
        card: {
            backgroundColor: colors.background,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            padding: 16,
            marginBottom: 16,
        },
        cardHeader: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        orderIconCircle: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#FFEFDC',
            alignItems: 'center',
            justifyContent: 'center',
        },
        orderHeaderText: {
            flex: 1,
            marginLeft: 12,
        },
        orderId: {
            fontSize: 14,
            fontWeight: '700',
            color: colors.text,
        },
        orderDate: {
            fontSize: 12,
            color: colors.muted,
            marginTop: 2,
        },
        statusPill: {
            backgroundColor: '#E3F6EC',
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 4,
        },
        statusText: {
            fontSize: 11,
            fontWeight: '700',
            color: '#2E9B5B',
        },
        divider: {
            height: 1,
            backgroundColor: colors.border,
            marginVertical: 12,
        },
        itemRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 6,
        },
        itemText: {
            flex: 1,
            fontSize: 13,
            color: colors.text,
            marginRight: 8,
        },
        itemPrice: {
            fontSize: 13,
            fontWeight: '600',
            color: colors.text,
        },
        totalRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: colors.border,
        },
        totalLabel: {
            fontSize: 14,
            fontWeight: '600',
            color: colors.text,
        },
        totalValue: {
            fontSize: 16,
            fontWeight: '700',
            color: colors.accent,
        },
    })
}

export default createStyle
