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
    })
}

export default createStyle
