import auth from '@react-native-firebase/auth';
import {firebase, FirebaseDatabaseTypes} from '@react-native-firebase/database';
import {nanoid} from 'nanoid';

export interface UserInfo {
  code: string;
  invited: number;
}

const db = firebase
  .app()
  .database(
    'https://referralapp-beb46-default-rtdb.europe-west1.firebasedatabase.app/',
  );

enum DatabaseEndpoints {
  users = 'users/',
}

class DatabaseAPI {
  static incrementRefValue = async (refCode: string) => {
    const res = await db.ref(DatabaseEndpoints.users).once('value');

    for (const [key, {code, invited}] of Object.entries<UserInfo>(res.val())) {
      if (code === refCode) {
        await db
          .ref(`${DatabaseEndpoints.users}${key}`)
          .update({invited: invited + 1});
        break;
      }
    }
  };

  static createNewUser = async () => {
    await db
      .ref(`${DatabaseEndpoints.users}${auth().currentUser?.uid}`)
      .set({invited: 0, code: nanoid(5).toUpperCase()});
  };

  static subscribeToCurrentUserInfo = <
    T extends (
      data: FirebaseDatabaseTypes.DataSnapshot,
      previousChildKey?: string | null | undefined,
    ) => void,
  >(
    callback: T,
  ) => {
    const currentUserID = auth().currentUser?.uid;
    const onValueChange = db
      .ref(`${DatabaseEndpoints.users}${currentUserID}`)
      .on('value', callback);

    return () =>
      db
        .ref(`${DatabaseEndpoints.users}${currentUserID}`)
        .off('value', onValueChange);
  };
}

export default DatabaseAPI;
