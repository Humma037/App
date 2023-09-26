/**
 * @format
 */
import { AppRegistry } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import { name as appName } from './app.json';
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC((App)));
