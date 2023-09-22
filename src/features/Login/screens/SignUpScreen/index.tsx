import React, {FC} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import TextWrapper from '../../../../components/TextWrapper';
import {LoginStackParamList} from '../../../../models/navigation';
import SignUpForm from '../../components/SignUpForm';
import {styles} from './styles';

type Props = NativeStackScreenProps<LoginStackParamList, 'SignUp'>;

const RegistrationScreen: FC<Props> = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <SignUpForm />
      <TouchableOpacity onPress={goToLogin} style={styles.goToLoginButton}>
        <TextWrapper>Already have an account? Sign In!</TextWrapper>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
