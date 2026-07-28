import { createNavigationContainerRef, StackActions } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export function navigate(name: string, params?: any) {
    if (navigationRef.isReady()) {
        (navigationRef as any).navigate(name, params)
    }
}

export function push(name: string, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(name, params))
    }
}

export function replace(name: string, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(name, params))
    }
}

export function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        navigationRef.goBack()
    }
}

export function resetRoot(name: string, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.reset({
            index: 0,
            routes: [{ name, params }],
        })
    }
}
