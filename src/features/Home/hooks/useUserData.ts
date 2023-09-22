import {useEffect, useState} from 'react';
import {FirebaseDatabaseTypes} from '@react-native-firebase/database';
import DatabaseAPI from '../../../services/API/Database';

const useUserData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [invitedUsers, setInvitedUsers] = useState(0);
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    try {
      setIsLoading(true);
      const subscription = DatabaseAPI.subscribeToCurrentUserInfo(
        (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
          const userData = snapshot.val();
          if (!referralCode) {
            setReferralCode(userData?.code);
          }
          setInvitedUsers(userData?.invited);
        },
      );

      return subscription;
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    invitedUsers,
    referralCode,
  };
};

export default useUserData;
