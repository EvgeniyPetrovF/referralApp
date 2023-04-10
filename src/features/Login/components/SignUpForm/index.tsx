import React from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/CustomButton';
import TextInputWrapper from '../../../../components/TextInputWrapper';
import useRegistrationForm from '../../hooks/useRegistrationForm';
import {styles} from './styles';

const SignUpForm = () => {
  const {
    error,
    isLoading,
    email,
    password,
    refCode,
    setRefCode,
    onEmailChange,
    onPasswordChange,
    signUpHandler,
    confirmedPassword,
    onConfirmedPasswordChange,
  } = useRegistrationForm();

  return (
    <View style={styles.formContainer}>
      <TextInputWrapper
        label="Email"
        placeholder="your_email@email.com"
        keyboardType="email-address"
        value={email}
        onChangeText={onEmailChange}
      />
      <TextInputWrapper
        label="Password"
        placeholder="******"
        secureTextEntry
        value={password}
        onChangeText={onPasswordChange}
      />
      <TextInputWrapper
        label="Confirm password"
        placeholder="******"
        secureTextEntry
        value={confirmedPassword}
        onChangeText={onConfirmedPasswordChange}
      />
      <TextInputWrapper
        label="Referral code"
        placeholder="Ref code"
        value={refCode}
        onChangeText={setRefCode}
        error={error}
        containerStyle={styles.hugeBottomOffset}
        autoCapitalize="characters"
      />
      <CustomButton
        label="Sign Up"
        onPress={signUpHandler}
        disabled={isLoading}
        pending={isLoading}
      />
    </View>
  );
};

export default SignUpForm;
