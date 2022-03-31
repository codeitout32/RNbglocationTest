import {Notifications} from 'react-native-notifications';

export const getNotifications = () => {
  // Request permissions on iOS, refresh token on Android
  Notifications.registerRemoteNotifications();

  Notifications.events().registerRemoteNotificationsRegistered(
    (event: Registered) => {
      // TO-DO: Send the token to my server so it could send back push notifications...
      console.log('Device Token Received', event.deviceToken);
    },
  );
  Notifications.events().registerRemoteNotificationsRegistrationFailed(
    (event: RegistrationError) => {
      console.error(event);
    },
  );
};
