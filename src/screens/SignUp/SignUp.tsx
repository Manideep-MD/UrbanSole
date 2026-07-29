import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import { ROLES } from '@utils/Constants';
import useThemeColors from '@utils/useThemeColors';
import { SIGN_UP_TEXT } from '@constants/SignUp';
import { SIGN_UP } from '@redux/reducers/AuthReducers';
import { goBack } from '@utils/NavigationUtils';

const SignUp = () => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
    const dispatch = useDispatch()
    const users = useSelector((state: any) => state.auth.users)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState(ROLES.SHOPPER)
    const [error, setError] = useState('')

    const handleSignUp = () => {
        if (!name.trim() || !email.trim() || !password) {
            setError(SIGN_UP_TEXT.ERROR_REQUIRED_FIELDS)
            return
        }

        const emailTaken = users.some(
            (user: any) => user.email.toLowerCase() === email.trim().toLowerCase(),
        )
        if (emailTaken) {
            setError(SIGN_UP_TEXT.ERROR_EMAIL_TAKEN)
            return
        }

        setError('')
        dispatch(SIGN_UP({ name: name.trim(), email: email.trim(), password, role }))
    }

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.logoBadge}>
                        <Icon name="footsteps" size={32} color={colors.background} />
                    </View>
                    <Text style={styles.title}>{SIGN_UP_TEXT.TITLE}</Text>
                    <Text style={styles.subtitle}>{SIGN_UP_TEXT.SUBTITLE}</Text>

                    <Text style={styles.label}>{SIGN_UP_TEXT.NAME_LABEL} <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder={SIGN_UP_TEXT.NAME_PLACEHOLDER}
                    />

                    <Text style={styles.label}>{SIGN_UP_TEXT.EMAIL_LABEL} <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder={SIGN_UP_TEXT.EMAIL_PLACEHOLDER}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>{SIGN_UP_TEXT.PASSWORD_LABEL} <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder={SIGN_UP_TEXT.PASSWORD_PLACEHOLDER}
                        secureTextEntry
                    />

                    <Text style={styles.label}>{SIGN_UP_TEXT.ROLE_LABEL} <Text style={styles.required}>*</Text></Text>
                    <View style={styles.roleRow}>
                        <TouchableOpacity
                            style={[styles.roleOption, role === ROLES.ADMIN && styles.roleOptionSelected]}
                            onPress={() => setRole(ROLES.ADMIN)}
                        >
                            <Text style={[styles.roleOptionText, role === ROLES.ADMIN && styles.roleOptionTextSelected]}>
                                {SIGN_UP_TEXT.ADMIN_LABEL}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.roleOption, role === ROLES.SHOPPER && styles.roleOptionSelected]}
                            onPress={() => setRole(ROLES.SHOPPER)}
                        >
                            <Text style={[styles.roleOptionText, role === ROLES.SHOPPER && styles.roleOptionTextSelected]}>
                                {SIGN_UP_TEXT.SHOPPER_LABEL}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
                        <Text style={styles.primaryButtonText}>{SIGN_UP_TEXT.SIGN_UP_BUTTON}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkRow} onPress={goBack}>
                        <Text style={styles.linkText}>
                            {SIGN_UP_TEXT.HAVE_ACCOUNT_TEXT} <Text style={styles.linkHighlight}>{SIGN_UP_TEXT.SIGN_IN_LINK}</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignUp;
