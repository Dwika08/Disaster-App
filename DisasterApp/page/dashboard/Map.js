import {
  Image,
  Dimensions,
  Modal,
  ScrollView,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from 'react-native-vector-icons/FontAwesome';

import MapView, {
  Marker,
  MarkerAnimated,
  PROVIDER_GOOGLE,
  Callout,
} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';

// const mar = {latitude: -7.5019468, longitude: 109.3900155};

const region = {
  latitude: -7.5019468,
  longitude: 109.3900155,
  latitudeDelta: 0.5,
  longitudeDelta: 0.1,
};

const Map = () => {
  const [dataMarker, setDataMarker] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('http://192.168.1.13/aplikasi/restapi.php?op=getMarker')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataMarker(json);
        // console.log(dataMarker);
      });
  };
  const Mar = () => {
    return (
      dataMarker &&
      dataMarker?.map((item, key) => (
        <Marker
          key={key}
          coordinate={{
            latitude: parseFloat(item.lat),
            longitude: parseFloat(item.long),
          }}>
          {item.bencana === 'Kebakaran' ? (
            <Icon name="gripfire" color="red" size={24} />
          ) : null}
          {item.bencana === 'Tanah Longsor' ? (
            <Icon name="house-damage" color="chocolate" size={18} />
          ) : null}
          {item.bencana === 'Banjir' ? (
            <Icon name="water" color="blue" size={24} />
          ) : null}
          {item.bencana === 'Angin Kencang' ? (
            <Icon name="wind" color="#5D5FEF" size={24} />
          ) : null}

          <Callout>
            <View style={{width: 210}}>
              <Text>Desa {item.desa}</Text>
              <Text>Kecamatan {item.kecamatan}</Text>
              <Text>Bencana {item.bencana}</Text>
            </View>
          </Callout>
        </Marker>
      ))
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}>
        <Mar />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '95%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
