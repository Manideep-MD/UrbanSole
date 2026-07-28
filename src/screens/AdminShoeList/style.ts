import { StyleSheet } from 'react-native'

const createStyle = (colors: any) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        list: {
            padding: 12,
            flexGrow: 1,
        },
        columnWrapper: {
            justifyContent: 'space-between',
        },
        emptyText: {
            textAlign: 'center',
            marginTop: 32,
            color: colors.text,
        },
        fab: {
            position: 'absolute',
            right: 16,
            bottom: 16,
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
}

export default createStyle
