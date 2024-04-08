import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {LatLng} from 'react-native-maps';
import useAppState from './useAppState';

function useUserLoction() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 37.5516032365118,
    longitude: 126.9898626020192,
  });
  const [isUserLocationError, setIsUserLocationError] = useState(false);
  const {isComback} = useAppState();
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        console.log('위치');
        console.log(latitude, longitude);
        setUserLocation({latitude, longitude});
        setIsUserLocationError(false);
      },
      () => {
        setIsUserLocationError(true);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, [isComback]);

  return {userLocation, isUserLocationError};
}

export default useUserLoction;
