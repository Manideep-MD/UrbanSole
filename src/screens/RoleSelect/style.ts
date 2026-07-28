import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            padding: 24,
            backgroundColor: colors.background,
        },
        logoBadge: {
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: colors.dark,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: 16,
        },
        title: {
            fontSize: 30,
            fontWeight: '800',
            textAlign: 'center',
            color: colors.text,
            marginBottom: 6,
        },
        subtitle: {
            fontSize: 15,
            textAlign: 'center',
            color: colors.muted,
            marginBottom: 36,
        },
        card: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 20,
            padding: 16,
            marginBottom: 16,
        },
        iconCircle: {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center',
        },
        cardTextWrap: {
            flex: 1,
            marginHorizontal: 14,
        },
        cardTitle: {
            fontSize: 17,
            fontWeight: '700',
            color: colors.dark,
            marginBottom: 2,
        },
        cardText: {
            fontSize: 13,
            color: colors.dark,
            opacity: 0.7,
        },
    })
}

export default createStyle
