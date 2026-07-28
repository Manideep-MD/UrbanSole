import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        container: {
            padding: 16,
            backgroundColor: colors.background,
            flexGrow: 1,
        },
        imageWrapper: {
            width: '100%',
            height: 260,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
        },
        image: {
            width: '70%',
            height: '70%',
            resizeMode: 'contain',
        },
        placeholderText: {
            color: colors.muted,
        },
        brand: {
            fontSize: 22,
            fontWeight: '700',
            color: colors.text,
        },
        cost: {
            fontSize: 22,
            fontWeight: '700',
            color: colors.accent,
            marginTop: 4,
            marginBottom: 20,
        },
        label: {
            fontSize: 14,
            fontWeight: '600',
            color: colors.text,
            marginBottom: 8,
        },
        description: {
            fontSize: 14,
            color: colors.muted,
            lineHeight: 20,
            marginTop: 20,
        },
        addToCartButton: {
            backgroundColor: colors.accent,
            borderRadius: 14,
            paddingVertical: 16,
            alignItems: 'center',
            marginTop: 24,
        },
        addToCartButtonDisabled: {
            opacity: 0.5,
        },
        addToCartButtonText: {
            color: colors.background,
            fontWeight: '700',
            fontSize: 16,
        },
    })
}

export default createStyle
