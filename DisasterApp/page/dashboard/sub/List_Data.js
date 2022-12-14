import {
  StyleSheet,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';

const List_Data = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState();
  const [tahun, setTahun] = useState();
  const [data, setData] = useState(null);
  const [dtBencana, setdtBencana] = useState();

  useEffect(() => {
    getBencana();
  }, []);

  const getBencana = () => {
    fetch('http://192.168.18.18/aplikasiV2/restapi.php?op=getBencana')
      .then(response => response.json())
      .then(json => {
        setdtBencana(json);
      });
  };
  const Peta = () => {
    return (
      <MapView
        initialRegion={{
          latitude: -7.5019468,
          longitude: 109.3900155,
          latitudeDelta: 0.5,
          longitudeDelta: 0.1,
        }}
        style={styles.map}>
        {data &&
          data?.map((item, key) => (
            <Marker
              key={key}
              coordinate={{
                latitude: parseFloat(item.lat),
                longitude: parseFloat(item.long),
              }}>
              <Callout>
                <View style={{width: 210}}>
                  <Text style={{color: 'black'}}>Desa {item.desa}</Text>
                  <Text style={{color: 'black'}}>
                    Kecamatan {item.kecamatan}
                  </Text>
                  <Text style={{color: 'black'}}>Bencana {item.bencana}</Text>
                  <Text style={{color: 'black'}}> {item.tanggal}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
      </MapView>
    );
  };

  const submit = () => {
    fetch('http://192.168.18.18/aplikasiV2/restapi.php?op=cariData', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tahun: tahun,
        bencana: id,
      }),
    })
      .then(resp => resp.json())
      .then(result => {
        console.log(result);

        if (result == null) {
          alert('Data tidak ditemukan');
        } else {
          setModalVisible(!modalVisible);
          setData(result);
        }
        // setTimeout(() => {

        // }, 1000);
      })
      .catch(e => {
        console.log(e);
      });
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
            <View style={styles.modalHeader}>
              <Text style={styles.h1}>Cari Data</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Tahun</Text>
              <TextInput
                onChangeText={setTahun}
                value={tahun}
                placeholderTextColor={'black'}
                style={[styles.input, {paddingHorizontal: 15}]}
                placeholder="Contoh: 2022"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Jenis Bencana</Text>
              <View style={styles.input}>
                <Picker
                  selectedValue={id}
                  onValueChange={(itemValue, itemIndex) => setId(itemValue)}
                  style={[{color: 'black'}]}>
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

              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.btnLabel}>Batal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitBtn} onPress={submit}>
                  <Text style={styles.btnLabel}>Cari</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flex: 1,
        }}>
        <Peta />
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => setModalVisible(true)}>
          <Image source={require('../../../img/navbar.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default List_Data;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  menuBtn: {
    padding: 10,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    backgroundColor: 'white',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '100%',
  },
  modalHeader: {
    width: '100%',
    paddingVertical: 15,
  },
  h1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputContainer: {
    padding: 5,
  },
  label: {
    color: 'black',
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#808080',
    borderRadius: 10,
    color: 'black',
  },
  btnLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#2196F3',
    width: '48%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  submitBtn: {
    backgroundColor: '#F194FF',
    width: '48%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
