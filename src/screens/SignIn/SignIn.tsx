import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import useThemeColors from '@utils/useThemeColors';
import { SIGN_IN_TEXT } from '@constants/SignIn';
import { SCREENS } from '@constants/screenNames';
import { SIGN_IN } from '@redux/reducers/AuthReducers';
import { navigate } from '@utils/NavigationUtils';

const SignIn = () => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
    const dispatch = useDispatch()
    const users = useSelector((state: any) => state.auth.users)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignIn = () => {
        const matchedUser = users.find(
            (user: any) => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password,
        )

        if (!matchedUser) {
            setError(SIGN_IN_TEXT.ERROR_INVALID_CREDENTIALS)
            return
        }

        setError('')
        dispatch(SIGN_IN(matchedUser))
    }

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.logoBadge}>
                        <Icon name="footsteps" size={32} color={colors.background} />
                    </View>
                    <Text style={styles.title}>{SIGN_IN_TEXT.TITLE}</Text>
                    <Text style={styles.subtitle}>{SIGN_IN_TEXT.SUBTITLE}</Text>

                    <Text style={styles.label}>{SIGN_IN_TEXT.EMAIL_LABEL} <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder={SIGN_IN_TEXT.EMAIL_PLACEHOLDER}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>{SIGN_IN_TEXT.PASSWORD_LABEL} <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder={SIGN_IN_TEXT.PASSWORD_PLACEHOLDER}
                        secureTextEntry
                    />

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <TouchableOpacity style={styles.primaryButton} onPress={handleSignIn}>
                        <Text style={styles.primaryButtonText}>{SIGN_IN_TEXT.SIGN_IN_BUTTON}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkRow} onPress={() => navigate(SCREENS.SIGN_UP)}>
                        <Text style={styles.linkText}>
                            {SIGN_IN_TEXT.NO_ACCOUNT_TEXT} <Text style={styles.linkHighlight}>{SIGN_IN_TEXT.SIGN_UP_LINK}</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignIn;
