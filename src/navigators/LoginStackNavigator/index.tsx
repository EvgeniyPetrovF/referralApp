import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import LoginScreen from '../../features/Login/screens/LoginScreen';
import SignUpScreen from '../../features/Login/screens/SignUpScreen';
import {LoginStackParamList} from '../../models/navigation';

const Stack = createNativeStackNavigator<LoginStackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  signUp: {headerTitle: 'Sign Up'},
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={options.signUp}
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;
