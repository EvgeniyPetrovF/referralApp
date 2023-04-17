import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Loader from '../../../../components/Loader';
import TextWrapper from '../../../../components/TextWrapper';
import {MainStackParamList} from '../../../../models/navigation';
import useAnimatedOpacity from '../../hooks/useAnimatedOpacity';
import useUserData from '../../hooks/useUserData';
import {styles} from './styles';

type Props = NativeStackScreenProps<MainStackParamList, 'HomeStackNavigator'>;

const HomeScreen: FC<Props> = () => {
  const {isLoading, referralCode, invitedUsers} = useUserData();
  const {animatedOpacityStyle} = useAnimatedOpacity({isLoading});

  return (
    <SafeAreaView style={styles.container}>
      {isLoading || !referralCode ? (
        <Loader />
      ) : (
        <Animated.View style={[animatedOpacityStyle, styles.listContainer]}>
          <View style={styles.headerContainer}>
            <TextWrapper style={[styles.refText, styles.bottomOffset]}>
              Your referral code:
            </TextWrapper>
            <View style={[styles.refCodeWrapper, styles.bottomOffset]}>
              <TextWrapper style={styles.refCode} selectable>
                {referralCode}
              </TextWrapper>
            </View>

            <TextWrapper style={styles.invitedUsers}>
              How many users registered via your code: {invitedUsers}
            </TextWrapper>
          </View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
