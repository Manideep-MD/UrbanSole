import { useCallback } from 'react'
import { BackHandler } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { confirmAction } from '@utils/ConfirmAlert'
import { EXIT_CONFIRM_TEXT } from '@constants/common'

const useExitConfirmation = () => {
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                confirmAction(
                    EXIT_CONFIRM_TEXT.TITLE,
                    EXIT_CONFIRM_TEXT.MESSAGE,
                    EXIT_CONFIRM_TEXT.CONFIRM,
                    () => BackHandler.exitApp(),
                )
                return true
            }

            const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress)
            return () => subscription.remove()
        }, []),
    )
}

export default useExitConfirmation
