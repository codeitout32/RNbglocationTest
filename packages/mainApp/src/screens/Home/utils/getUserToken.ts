import {getUserIdStart} from '@next/common/slices/assets.slice';
import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

const sendFcmToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  return token;
};

const getUserToken = dispatch => {
  sendFcmToken().then(device_id => {
    const device_type = Platform.OS;
    const notification_status = true;
    console.log('userid', device_id, device_type, notification_status);
    dispatch(getUserIdStart({device_id, device_type, notification_status}));
  });
};

export default getUserToken;
