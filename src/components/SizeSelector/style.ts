import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        sizeButton: {
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 6,
            paddingVertical: 6,
            paddingHorizontal: 12,
            marginRight: 8,
            marginBottom: 8,
        },
        sizeButtonSelected: {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
        },
        sizeText: {
            color: colors.text,
        },
        sizeTextSelected: {
            color: colors.background,
        },
    })
}

export default createStyle
