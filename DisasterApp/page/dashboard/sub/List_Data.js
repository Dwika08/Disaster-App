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
  Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';

import MapView, {
  Marker,
  MarkerAnimated,
  PROVIDER_GOOGLE,
  Callout,
} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';

const region = {
  latitude: -7.5019468,
  longitude: 109.3900155,
  latitudeDelta: 0.5,
  longitudeDelta: 0.1,
};

const List_Data = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dataMarker, setDataMarker] = useState();
  const [dtBencana, setdtBencana] = useState();
  const [id_bencana_detail, setId_bencana_detail] = useState();
  const [tahun, setTahun] = useState();
  useEffect(() => {
    
    getBencana();
  }, []);

  const getData = () => {
    fetch('http://192.168.0.106/aplikasiV2/restapi.php?op=getMarker21')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataMarker(json);
        // console.log(dataMarker);
      });
  };
  const cariData = () => {
    // alert(id_bencana_detail);
  fetch('http://192.168.1.7/aplikasiV2/restapi.php?op=cariData', {
    method: 'post',
    body: JSON.stringify({
      tahun: tahun,
      bencana: id_bencana_detail,
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      // console.log(json);
      if (json != 'null') {
      } else if (json == 'null') {
        Alert ('Data tidak ada');
      }
      setDataMarker(json);
      setModalVisible(false);
      // console.log(dataMarker);
    });
};
  const getBencana = () => {
    fetch('http://192.168.1.7/aplikasiV2/restapi.php?op=getBencana')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setdtBencana(json);
        // console.log(dtBencana);
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
          {/* {item.bencana === 'Tanah Longsor' ? (
            <Image source={require('../../img/hill.png')} size={24} />
          ) : null}
          {item.bencana === 'Banjir' ? (
            <Image source={require('../../img/water.png')} size={24} />
          ) : null}
          {item.bencana === 'Kebakaran' ? (
            <Image source={require('../../img/fire.png')} size={24} />
          ) : null}
          {item.bencana === 'Angin Kencang' ? (
            <Image source={require('../../img/tornado.png')} size={24} />
          ) : null} */}
          <Callout>
            <View style={{width: 210}}>
              <Text style={{color: 'black'}}>Desa {item.desa}</Text>
              <Text style={{color: 'black'}}>Kecamatan {item.kecamatan}</Text>
              <Text style={{color: 'black'}}>Bencana {item.bencana}</Text>
              <Text style={{color: 'black'}}> {item.tanggal}</Text>
            </View>
          </Callout>
        </Marker>
      ))
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title1}>Tahun</Text>
            <TextInput
              style={styles.input}
              onChangeText={setTahun}
              value={tahun}
              placeholderTextColor="black"
              placeholder="Contoh: 2022"
            />
            <Text style={styles.title1}>Bencana</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={id_bencana_detail}
                onValueChange={(itemValue, itemIndex) =>
                  setId_bencana_detail(itemValue)
                }
                style={{color: 'black'}}>
                <Picker.Item label="Pilih Bencana" value="" />
                {dtBencana &&
                  dtBencana?.map((item, key) => {
                    return (
                      <Picker.Item
                        label={item.bencana}
                        value={item.ID}
                        key={key}
                      />
                    );
                  })}
              </Picker>
            </View>
            <View style={styles.body}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonOpen]}
              onPress={cariData}>
                <Text style={styles.textStyle}>Cari</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <MapView
        style={styles.map}
        initialRegion={region}
        // showsUserLocation={true}
        provider={PROVIDER_GOOGLE}>
        <Mar />
      </MapView>
      <TouchableOpacity
        style={{padding: 25}}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image source={require('../../../img/navbar.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default List_Data;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    width: '80%',
    height: '94%',
    padding: 35,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width: '47%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  title1: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 15,
    marginBottom: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    color: 'black'
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    height: 40,
  },
});
