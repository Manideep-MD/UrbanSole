import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
        },
        animation: {
            width: 180,
            height: 180,
        },
        heading: {
            fontSize: 24,
            fontWeight: '800',
            color: colors.text,
            marginTop: 8,
            marginBottom: 8,
        },
        subtext: {
            fontSize: 14,
            color: colors.muted,
            textAlign: 'center',
            lineHeight: 20,
            marginBottom: 32,
        },
        continueButton: {
            backgroundColor: colors.accent,
            borderRadius: 14,
            paddingVertical: 16,
            paddingHorizontal: 32,
            alignSelf: 'stretch',
            alignItems: 'center',
        },
        continueButtonText: {
            color: colors.background,
            fontWeight: '700',
            fontSize: 16,
        },
    })
}

export default createStyle
