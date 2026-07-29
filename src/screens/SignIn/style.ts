import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: colors.background,
        },
        flex: {
            flex: 1,
        },
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            padding: 24,
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
            fontSize: 28,
            fontWeight: '800',
            textAlign: 'center',
            color: colors.text,
            marginBottom: 6,
        },
        subtitle: {
            fontSize: 15,
            textAlign: 'center',
            color: colors.muted,
            marginBottom: 32,
        },
        label: {
            fontSize: 14,
            fontWeight: '600',
            color: colors.text,
            marginBottom: 8,
        },
        required: {
            color: colors.danger,
        },
        input: {
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginBottom: 16,
            color: colors.text,
        },
        errorText: {
            color: colors.danger,
            fontSize: 13,
            marginBottom: 12,
        },
        primaryButton: {
            backgroundColor: colors.primary,
            borderRadius: 8,
            paddingVertical: 14,
            alignItems: 'center',
            marginTop: 8,
        },
        primaryButtonText: {
            color: colors.background,
            fontWeight: '600',
            fontSize: 16,
        },
        linkRow: {
            marginTop: 20,
            alignItems: 'center',
        },
        linkText: {
            fontSize: 14,
            color: colors.muted,
        },
        linkHighlight: {
            color: colors.accent,
            fontWeight: '700',
        },
    })
}

export default createStyle
