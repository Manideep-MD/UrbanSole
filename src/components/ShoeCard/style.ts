import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        card: {
            width: '47%',
            backgroundColor: colors.background,
            borderRadius: 16,
            padding: 10,
            marginBottom: 16,
        },
        imageWrapper: {
            width: '100%',
            height: 145,
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
        },
        image: {
            width: '80%',
            height: '80%',
            resizeMode: 'contain',
        },
        placeholderText: {
            fontSize: 11,
            color: colors.muted,
        },
        brand: {
            fontSize: 14,
            fontWeight: '600',
            color: colors.text,
            marginBottom: 4,
        },
        footerRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        cost: {
            fontSize: 14,
            fontWeight: '700',
            color: colors.accent,
        },
        actionPill: {
            backgroundColor: colors.dark,
            borderRadius: 20,
            paddingHorizontal: 12,
            paddingVertical: 4,
        },
        actionText: {
            fontSize: 11,
            fontWeight: '600',
            color: colors.background,
        },
    })
}

export default createStyle
