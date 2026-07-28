import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        button: {
            width: 32,
            height: 32,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonDisabled: {
            opacity: 0.4,
        },
        value: {
            fontSize: 15,
            fontWeight: '600',
            color: colors.text,
            marginHorizontal: 14,
            minWidth: 16,
            textAlign: 'center',
        },
    })
}

export default createStyle
