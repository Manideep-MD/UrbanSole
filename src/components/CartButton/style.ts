import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        cartButton: {
            marginRight: 12,
            padding: 6,
        },
        badge: {
            position: 'absolute',
            top: 0,
            right: 0,
            minWidth: 16,
            height: 16,
            borderRadius: 8,
            paddingHorizontal: 3,
            backgroundColor: colors.danger,
            alignItems: 'center',
            justifyContent: 'center',
        },
        badgeText: {
            color: colors.background,
            fontSize: 10,
            fontWeight: '700',
        },
    })
}

export default createStyle
