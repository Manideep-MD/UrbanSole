import { Alert } from 'react-native'

export const confirmAction = (
    title: string,
    message: string,
    confirmText: string,
    onConfirm: () => void,
    options?: { cancelText?: string; destructive?: boolean },
) => {
    Alert.alert(title, message, [
        { text: options?.cancelText || 'Cancel', style: 'cancel' },
        {
            text: confirmText,
            style: options?.destructive ? 'destructive' : 'default',
            onPress: onConfirm,
        },
    ])
}
