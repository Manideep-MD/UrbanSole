import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        headerButton: {
            marginRight: 12,
        },
        logoutText: {
            color: colors.primary,
            fontWeight: '600',
        },
    })
}

export default createStyle
