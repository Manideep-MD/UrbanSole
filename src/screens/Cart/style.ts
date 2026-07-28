import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
        },
        info: {
            flex: 1,
        },
        brand: {
            fontSize: 16,
            fontWeight: '600',
            color: colors.text,
        },
        details: {
            color: colors.text,
            marginTop: 2,
        },
        quantityRow: {
            marginTop: 8,
        },
        removeButton: {
            paddingHorizontal: 10,
        },
        removeText: {
            color: colors.danger,
            fontSize: 13,
            fontWeight: '600',
        },
        emptyText: {
            textAlign: 'center',
            marginTop: 32,
            color: colors.text,
        },
        footer: {
            padding: 16,
            borderTopWidth: 1,
            borderTopColor: colors.border,
        },
        totalText: {
            fontSize: 18,
            fontWeight: '700',
            color: colors.text,
            marginBottom: 12,
        },
        buyButton: {
            backgroundColor: colors.primary,
            borderRadius: 8,
            paddingVertical: 14,
            alignItems: 'center',
        },
        buyButtonDisabled: {
            opacity: 0.5,
        },
        buyButtonText: {
            color: colors.background,
            fontWeight: '600',
            fontSize: 16,
        },
    })
}

export default createStyle
