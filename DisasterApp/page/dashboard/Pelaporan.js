import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  Alert,
  TextInput,
  View,
  Modal,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView, {
  Marker,
  MarkerAnimated,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import ImagePicker, {
  showImagePicker,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {PageSlider} from '@pietile-native-kit/page-slider';
import moment from 'moment';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Pelaporan = () => {
  const navigation = useNavigation();
  const [selectedPage, setSelectedPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(false);
  const [dataBencana, setDataBencana] = useState();
  const [dtBencana, setdtBencana] = useState();

  // -===- //
  const [tgl_kejadian, setTgl_kejadian] = useState();
  const [id_bencana_detail, setId_bencana_detail] = useState();
  const [nama_kk, setNama_kk] = useState();
  const [jumlah_jiwa, setJumlah_jiwa] = useState();
  const [rt, setRt] = useState();
  const [rw, setRw] = useState();
  const [id_desa_detail, setId_desa_detail] = useState();
  const [rusak_berat, setRusak_berat] = useState();
  const [rusak_sedang, setRusak_sedang] = useState();
  const [rusak_ringan, setRusak_ringan] = useState();
  const [terancam, setTerancam] = useState();
  const [meninggal_dunia, setMeninggal_dunia] = useState();
  const [luka_luka, setLuka_luka] = useState();
  const [kronologi, setKronologi] = useState();
  const [kerugian, setKerugian] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [uri, setUri] = useState();

  // ==== ///
  const [initialRegion, setinitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [marker, setMarker] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getPosition = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          const lat = JSON.stringify(position.coords.latitude);
          const lng = JSON.stringify(position.coords.longitude);
          setinitialRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });

          setMarker({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          if (error.code == 2) {
            RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
              interval: 10000,
              fastInterval: 5000,
            })
              .then(data => {})
              .catch(err => {
                console.log(err);
              });
          }
        },
      );
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Aktifkan Izin Lokasi',
            message: 'Untuk menggunakan aplikasi, beri izin lokasi',
            buttonNeutral: 'Tanya Nanti',
            buttonNegative: 'Batal',
            buttonPositive: 'Izinkan',
          },
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const Map = () => {
    return (
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsTraffic={true}>
        <MarkerAnimated
          coordinate={marker}
          draggable
          onDragEnd={a => {
            // console.log(a.nativeEvent.coordinate.latitude);

            setinitialRegion({
              latitude: a.nativeEvent.coordinate.latitude,
              longitude: a.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            });

            setMarker({
              latitude: a.nativeEvent.coordinate.latitude,
              longitude: a.nativeEvent.coordinate.longitude,
            });
            setLat(a.nativeEvent.coordinate.latitude);
            setLng(a.nativeEvent.coordinate.longitude);
          }}
        />
      </MapView>
    );
  };

  const handleLaunchGallery = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    const result = await launchImageLibrary(options);

    setUri(result.assets[0].uri);
    setType(result.assets[0].type);
    setName(result.assets[0].fileName);
    setModalVisible(!modalVisible);
  };
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);

    const tgl = date.toISOString();
    setTgl_kejadian(tgl);
  }
  const onCurrentPageChange = () => {};

  useEffect(() => {
    Submit();
    getBencana();
    getData();
    getPosition();
  }, []);

  const foto = {
    uri: uri,
    type: type,
    name: name,
  };
  const getData = () => {
    fetch('http://192.168.18.18/aplikasiV2/restapi.php?op=input')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataBencana(json);
        // console.log(dataBencana);
      });
  };

  const getBencana = () => {
    fetch('http://192.168.18.18/aplikasiV2/restapi.php?op=getBencana')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setdtBencana(json);
        // console.log(dtBencana);
      });
  };

  const Submit = () => {
    const formData = new FormData();
    formData.append('tgl_kejadian', tgl_kejadian);
    formData.append('id_bencana_detail', id_bencana_detail);
    formData.append('file', foto);
    formData.append('nama_kk', nama_kk);
    formData.append('jumlah_jiwa', jumlah_jiwa);
    formData.append('rt', rt);
    formData.append('rw', rw);
    formData.append('id_desa_detail', id_desa_detail);
    formData.append('rusak_berat', rusak_berat);
    formData.append('rusak_sedang', rusak_sedang);
    formData.append('rusak_ringan', rusak_ringan);
    formData.append('terancam', terancam);
    formData.append('meninggal_dunia', meninggal_dunia);
    formData.append('luka_luka', luka_luka);
    formData.append('kronologi', kronologi);
    formData.append('kerugian', kerugian);
    formData.append('lat', lat);
    formData.append('lng', lng);
    fetch('http://192.168.18.18/aplikasiV2/restapi.php?op=inputData', {
      method: 'post',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data;',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json.status);

        if (json.status == 'ok') {
          Alert.alert('', 'Pelaporan Berhasil');
          setTgl_kejadian('');
          setId_bencana_detail('');
          setNama_kk('');
          setJumlah_jiwa('');
          setRt('');
          setRw('');
          setId_desa_detail('');
          setRusak_berat('');
          setRusak_sedang('');
          setRusak_ringan('');
          setTerancam('');
          setMeninggal_dunia('');
          setLuka_luka('');
          setKronologi('');
          setKerugian('');
          setLat('');
          setLng('');
          setName('');
          setType('');
          setUri('');
          
        } else {
          Alert.alert('', 'Pelaporan Gagal');
        }
        // console.log(dataMarker);
      });
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                backgroundColor: 'black',
                width: '20%',
                height: width * 0.01,
                marginVertical: 15,
                borderRadius: 100,
              }}></View>
            <Text style={styles.modalText}>Pilih Sumber</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleLaunchGallery}>
              <Text style={styles.textStyle}>Galeri</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleLaunchCamera}>
              <Text style={styles.textStyle}>Kamera</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image source={require('../../img/left.png')} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Pelaporan</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <PageSlider
          style={styles.pageSlider}
          selectedPage={selectedPage}
          onSelectedPageChange={setSelectedPage}
          onCurrentPageChange={onCurrentPageChange}>
          <View style={styles.body}>
            <Text style={styles.title}>Jenis Kejadian</Text>
            {/* Tanggal Kejadian */}
            <View style={styles.input2}>
              {datePicker && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onDateSelected}
                  style={StyleSheet.datePicker}
                />
              )}

              {!datePicker && (
                <View>
                  <TouchableOpacity color="green" onPress={showDatePicker}>
                    <Text style={styles.text}>
                      {moment(date).format('YYYY-MM-DD')}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.input2}>
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

            <Text style={styles.title}>Tempat Kejadian</Text>
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="Nama KK"
              style={styles.input}
              onChangeText={setNama_kk}
              value={nama_kk}
              maxLength={100}
            />
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="Jumlah Jiwa"
              style={styles.input}
              onChangeText={setJumlah_jiwa}
              value={jumlah_jiwa}
              maxLength={3}
              keyboardType="numeric"
            />
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="RT"
              style={styles.input}
              onChangeText={setRt}
              value={rt}
              maxLength={3}
              keyboardType="numeric"
            />
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="RW"
              style={styles.input}
              onChangeText={setRw}
              value={rw}
              maxLength={3}
              keyboardType="numeric"
            />
            <View style={styles.input2}>
              <Picker
                selectedValue={id_desa_detail}
                onValueChange={itemValue => setId_desa_detail(itemValue)}
                style={{color: 'black'}}>
                <Picker.Item label="Lokasi Kejadian" value="null" />
                {dataBencana &&
                  dataBencana?.map((item, key) => {
                    return (
                      <Picker.Item
                        label={item.desa_kec}
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
                onPress={() => {
                  setSelectedPage('1');
                }}>
                <Text style={styles.textBtn}>Lanjut</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <Text style={styles.title}>Kerusakan</Text>
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="Rusak Berat"
              style={styles.input}
              onChangeText={setRusak_berat}
              value={rusak_berat}
              maxLength={100}
            />
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="Rusak Sedang"
              style={styles.input}
              onChangeText={setRusak_sedang}
              value={rusak_sedang}
              maxLength={100}
            />
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="Rusak Ringan"
              style={styles.input}
              onChangeText={setRusak_ringan}
              value={rusak_ringan}
              maxLength={100}
            />
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="Terancam"
              style={styles.input}
              onChangeText={setTerancam}
              value={terancam}
              maxLength={4}
            />
            <Text style={styles.title}>Korban Jiwa</Text>
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="Meninggal Dunia"
              style={styles.input}
              onChangeText={setMeninggal_dunia}
              value={meninggal_dunia}
              maxLength={4}
              keyboardType="numeric"
            />
            <TextInput
              multiline
              placeholderTextColor="black"
              placeholder="Luka Luka"
              style={styles.input}
              onChangeText={setLuka_luka}
              value={luka_luka}
              maxLength={4}
              keyboardType="numeric"
            />

            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => {
                  setSelectedPage('0');
                }}>
                <Text style={styles.textBtn}>Kembali</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setSelectedPage('2');
                }}>
                <Text style={styles.textBtn}>Lanjut</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <Text style={styles.title}>Kronologi</Text>
            <TextInput
              placeholderTextColor="black"
              placeholder="Kronologi"
              style={styles.inputlarge}
              onChangeText={setKronologi}
              value={kronologi}
              maxLength={1000}
              multiline
            />
            <View
              style={{
                marginTop: height * 0.02,
                height: '6%',
                flexDirection: 'row',
              }}>
              <TextInput
                style={{
                  color: 'black',
                  width: '10%',
                  paddingLeft: 10,
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                  backgroundColor: '#dcdcdc',
                }}
                value={'Rp. '}
                editable={false}
              />
              <TextInput
                placeholderTextColor="black"
                placeholder="Kerugian"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  width: '90%',
                  height: '100%',
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                  justifyContent: 'center',
                  paddingLeft: 15,
                }}
                onChangeText={setKerugian}
                value={kerugian}
                maxLength={10}
                keyboardType="numeric"
              />
            </View>

            <Text style={styles.title1}>File Upload Gambar</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={[styles.input, styles.inputFoto]}>
              <Text style={styles.buttonText}>Pilih Foto</Text>
              {name != null && <Text style={styles.buttonText}>✔</Text>}

            </TouchableOpacity>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => {
                  setSelectedPage('1');
                }}>
                <Text style={styles.textBtn}>Kembali</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setSelectedPage('3');
                }}>
                <Text style={styles.textBtn}>Lanjut</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                fontWeight: 'bold',
                paddingTop: 15,
                marginBottom: 10,
                paddingLeft: 170,
                justifyContent: 'center',
              }}>
              Map
            </Text>
            <View style={styles.mapContainer}>
              <Map />
              <Text style={styles.petunjukText}>
                *tahan dan geser marker untuk menentukan titik
              </Text>

              <Text style={styles.coordText}>Latitude : {lat}</Text>
              <Text style={styles.coordText}>Longitude : {lng}</Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn2}
                onPress={() => {
                  setSelectedPage('2');
                }}>
                <Text style={styles.textBtn}>Kembali</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={Submit}>
                <Text style={styles.textBtn}>Kirim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </PageSlider>
      </ScrollView>
    </View>
  );
};

export default Pelaporan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapcontainer: {
    alignItems: 'center',
    height: 150,
    width: 30,
  },
  text: {
    fontSize: 16,
    paddingLeft: 15,
    color: 'black',
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 8,
    marginBottom: 1,
    justifyContent: 'center',
    paddingLeft: 150,
  },
  title1: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 130,
    marginBottom: 1,
    justifyContent: 'center',
  },
  inputlarge: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: '20%',
    marginTop: height * 0.02,
    borderRadius: 6,
    justifyContent: 'center',
    textAlignVertical: 'top',
    borderWidth: 1,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: '6%',
    marginTop: height * 0.02,
    borderRadius: 4,
    justifyContent: 'center',
    borderWidth: 1,
    paddingLeft: 15,
  },
  input2: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: '6%',
    marginTop: height * 0.02,
    borderRadius: 4,
    justifyContent: 'center',
    borderWidth: 1,
  },
  inputFoto: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: {
    height: height * 0.06,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
  },
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: '#21242A',
  },
  backBtn: {
    paddingLeft: 5,
  },
  titleContainer: {
    flex: 1,
    paddingRight: 50,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: width * 0.046,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    borderRadius: 2,
    padding: 10,
    width: '80%',
    marginTop: 10,
  },
  buttonClose: {},
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  // MODAL //
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: width,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    paddingBottom: height * 0.03,
    borderTopWidth: 0.2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  // === //

  btnContainer: {
    bottom: height * 0.16,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 40,
    width: '100%',
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#5D5FEF',
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btn2: {
    backgroundColor: '#EF5D5D',
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonstyle: {
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },

  petunjukText: {
    marginTop: height * 0.02,
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#D83939',
  },
  mapContainer: {
    width: '100%',
    height: '40%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    padding: 10,
    paddingBottom: 45,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: 'black',
  },
  body: {
    height: height * 0.8,
    padding: 20,
  },
});
