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
            padding: 16,
            backgroundColor: colors.background,
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
        label: {
            fontSize: 14,
            fontWeight: '600',
            color: colors.text,
            marginBottom: 8,
        },
        orLabel: {
            fontSize: 12,
            color: colors.muted,
            textAlign: 'center',
            marginBottom: 8,
        },
        imageRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
        },
        preview: {
            width: 64,
            height: 64,
            borderRadius: 8,
            marginRight: 12,
        },
        photoButton: {
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 14,
        },
        photoButtonText: {
            color: colors.text,
        },
        saveButton: {
            backgroundColor: colors.primary,
            borderRadius: 8,
            paddingVertical: 14,
            alignItems: 'center',
            marginTop: 24,
        },
        saveButtonDisabled: {
            opacity: 0.5,
        },
        saveButtonText: {
            color: colors.background,
            fontWeight: '600',
            fontSize: 16,
        },
        deleteButton: {
            borderWidth: 1,
            borderColor: colors.danger,
            borderRadius: 8,
            paddingVertical: 14,
            alignItems: 'center',
            marginTop: 12,
        },
        deleteButtonText: {
            color: colors.danger,
            fontWeight: '600',
            fontSize: 16,
        },
    })
}

export default createStyle
