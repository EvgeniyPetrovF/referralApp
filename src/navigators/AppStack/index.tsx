import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {useAuth} from '../../common/hooks/useAuth';
import {StackParamList} from '../../models/navigation';
import LoginStackNavigator from '../LoginStackNavigator';
import MainTabNavigator from '../MainTabNavigator';

const Stack = createNativeStackNavigator<StackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  home: {headerTitle: 'Home'},
  login: {headerShown: false},
};

const AppStack = () => {
  const {user} = useAuth();

  return (
    <Stack.Navigator initialRouteName="LoginStackNavigator">
      {user ? (
        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={options.home}
        />
      ) : (
        <Stack.Screen
          name="LoginStackNavigator"
          component={LoginStackNavigator}
          options={options.login}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
