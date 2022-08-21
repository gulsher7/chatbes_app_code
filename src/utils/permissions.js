import React from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

export const androidCameraPermission = () =>
  new Promise(async (resolve, reject) => {
    try {
      if (Platform.OS === 'android' && Platform.Version > 22) {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);
        console.log(granted, 'the granted value');

        if (
          granted['android.permission.CAMERA'] !== 'granted' ||
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
          granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
        ) {
          Alert.alert(
            'Alert',
            "Permission",
            [{text: 'OK'}],
            {cancelable: true},
          );
          return resolve(false);
          // alert(strings.DO_NOT_HAVE_PERMISSIONS_TO_SELECT_IMAGE);
        }
        return resolve(true);
      }

      return resolve(true);
    } catch (error) {
      return resolve(false);
    }
  });






