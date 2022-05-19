import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';
const axiospost = position => {
  const location = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  axios
    .post('http://65.0.44.14/api/v1/product', location)
    .then(response => console.log('response', response));
};
const getLocation = setState => {
  console.log('hello from getlocation');
  Geolocation.getCurrentPosition(
    position => {
      console.log(position);
      setState(position);
      axiospost(position);
    },
    error => {
      console.log(error.code, error.message);
    },
    {
      // timeout: 1000,
      enableHighAccuracy: true,
      maximumAge: 0,
    },
  );
};

export default getLocation;
