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

import MapView, {
  Marker,
  MarkerAnimated,
  PROVIDER_GOOGLE,
} from 'react-native-maps';

const mar = {latitude: -7.5019468, longitude: 109.3900155};
const region = {
  latitude: -7.5019468,
  longitude: 109.3900155,
  latitudeDelta: 0.5,
  longitudeDelta: 0.1,
};
const Map = () => {
  const Pol = () => {
    return (
      <Marker
        coordinate={mar}
        pinColor={'purple'} // any color
        title={'title'}
        description={'description'}
      />
    );
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}>
        <Pol />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
