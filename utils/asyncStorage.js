import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service';
// import * as Location from 'expo-location';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Error storing value: ', error);
  }
};


export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log('Error retrieving value: ', error);
    }
};

// export const getCurrentLocation = async () => {
//   try {
//     const { status } = await Location.requestForegroundPermissionsAsync();
    
//     if (status !== 'granted') {
//       console.error('Location permission not granted');
//       return;
//     }

//     const location = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = location.coords;
//     const locationString = `${latitude},${longitude}`;
//     // Use latitude and longitude as needed in your application
//     console.log('Latitude:', latitude);
//     console.log('Longitude:', longitude);
//     return locationString;
//   } catch (error) {
//     console.error('Error getting current location: ', error);
//     throw error;
//   }
// };