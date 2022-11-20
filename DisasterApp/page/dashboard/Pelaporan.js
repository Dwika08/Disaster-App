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
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedPage, setSelectedPage] = useState(0);
  const [dataBencana, setDataBencana] = useState();
  const [dtBencana, setdtBencana] = useState();
  const [datePicker, setDatePicker] = useState(false);
  
  // slide 1 //
  const [id_bencana_detail, setId_bencana_detail] = useState();
  const [tgl_Bencana, setTgl_bencana] = useState();
  const [id_desa_detail, setId_desa_detail] = useState();
  const [penyebab_kejadian, setPenyebab_kejadian] = useState();
  const [rusak_ringan, setRusak_ringan] = useState();
  const [rusak_sedang, setRusak_sedang] = useState();
  const [rusak_berat, setRusak_berat] = useState();
  const [md, setMd] = useState();
  const [lr, setLr] = useState();
  const [lb, setLb] = useState();
  const [pengungsi_jiwa, setPengungsi_jiwa] = useState();
  const [pengungsi_kk, setPengungsi_kk] = useState();
  const [nama_pelapor, setNama_pelapor] = useState();
  const [tlp_darurat, setTlp_darurat] = useState();
  const [kondisi_umum, setKondisi_umum] = useState();
  const [tindakan, setTindakan] = useState();
  const [kendala, setKendala] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  ///
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [uri, setUri] = useState();

///
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

  const onCurrentPageChange = () => {};

  const getPosition = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          const lat = JSON.stringify(position.coords.latitude);
          const long = JSON.stringify(position.coords.longitude);
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

  useEffect(() => {
    const callApi = async () => {
      await getData();
      await getBencana();
    };
    callApi();
    getPosition();
  }, []);

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

  const handleLaunchCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    const result = await launchCamera(options);

    setUri(result.assets[0].uri);
    setType(result.assets[0].type);
    setName(result.assets[0].fileName);

    setModalVisible(!modalVisible);
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

  const Submit = () => {
    const tgl_bencana = moment(tgl_Bencana).format('YYYY-MM-DD');
    const formData = new FormData();
    formData.append('id_bencana_detail', id_bencana_detail);
    formData.append('tgl_bencana', tgl_bencana);
    formData.append('id_desa_detail', id_desa_detail);
    formData.append('penyebab_kejadian', penyebab_kejadian);
    formData.append('rusak_ringan', rusak_ringan);
    formData.append('rusak_sedang', rusak_sedang);
    formData.append('rusak_berat', rusak_berat);
    formData.append('md', md);
    formData.append('lr', lr);
    formData.append('lb', lb);
    formData.append('pengungsi_jiwa', pengungsi_jiwa);
    formData.append('pengungsi_kk', pengungsi_kk);
    formData.append('nama_pelapor', nama_pelapor);
    formData.append('tlp_darurat', tlp_darurat);
    formData.append('kondisi_umum', kondisi_umum);
    formData.append('tindakan', tindakan);
    formData.append('kendala', kendala);
    formData.append('lat', lat);
    formData.append('lng', lng);
    formData.append('file', {
      uri: uri,
      name: name,
      type: type,
    });
      fetch('http://192.168.1.4/aplikasi/restapi.php?op=inputData', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData
      })
        .then(res => res.json())
        .then(resp => {
          // console.log(resp);
          if (resp.status == 'ok') {
            Alert.alert('', 'Pelaporan Berhasil');
          } else {
            Alert.alert('', 'Pelaporan Gagal');
          }
        });
  };

  const getData = () => {
    fetch('http://192.168.1.4/aplikasi/restapi.php?op=input')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataBencana(json);
        // console.log(dataBencana);
      });
  };

  const getBencana = () => {
    fetch('http://192.168.1.4/aplikasi/restapi.php?op=getBencana')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setdtBencana(json);
        // console.log(dtBencana);
      });
  };

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);

    const tgl = date.toISOString();
    setTgl_bencana(tgl);
  }

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
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleLaunchCamera}>
              <Text style={styles.textStyle}>Kamera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView>
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

        <View style={styles.content}>
          <PageSlider
            style={styles.pageSlider}
            selectedPage={selectedPage}
            onSelectedPageChange={setSelectedPage}
            onCurrentPageChange={onCurrentPageChange}>
            <View style={styles.formContainer}>
              <Text style={styles.title}>Jenis Kejadian</Text>

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

              <View style={styles.input}>
                {datePicker && (
                  <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'android' ? 'spinner' : 'default'}
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
              <View style={styles.input}>
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
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Penyebab Kejadian"
                style={styles.inputlarge}
                onChangeText={setPenyebab_kejadian}
                value={penyebab_kejadian}
                maxLength={500}
              />

              <Text style={styles.title1}>Dampak Bencana</Text>
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
                placeholder="Rusak Sedang"
                style={styles.input}
                onChangeText={setRusak_sedang}
                value={rusak_sedang}
                maxLength={100}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Rusak Berat"
                style={styles.input}
                onChangeText={setRusak_berat}
                value={rusak_berat}
                maxLength={100}
              />
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

            <View style={styles.formContainer}>
              <Text style={styles.title}>Korban Jiwa</Text>
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Meninggal Dunia"
                style={styles.input}
                onChangeText={setMd}
                value={md}
                maxLength={100}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Luka Ringan"
                style={styles.input}
                onChangeText={setLr}
                value={lr}
                maxLength={100}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Luka Berat"
                style={styles.input}
                onChangeText={setLb}
                value={lb}
                maxLength={400}
              />
              <Text style={styles.title1}>Pengunsi Jiwa/KK</Text>
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Jiwa"
                style={styles.input}
                onChangeText={setPengungsi_jiwa}
                value={pengungsi_jiwa}
                keyboardType="numeric"
                maxLength={3}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="KK"
                style={styles.input}
                onChangeText={setPengungsi_kk}
                value={pengungsi_kk}
                keyboardType="numeric"
                maxLength={3}
              />

              <Text style={styles.title1}>Informasi Pelapor/Instansi *</Text>
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Nama Pelapor"
                style={styles.input}
                onChangeText={setNama_pelapor}
                value={nama_pelapor}
                maxLength={200}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="No. Tlp Darurat"
                style={styles.input}
                onChangeText={setTlp_darurat}
                value={tlp_darurat}
                keyboardType="numeric"
                maxLength={12}
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

            <View style={styles.formContainer}>
              <TextInput
                placeholderTextColor="black"
                placeholder="Kondisi Umum / Kronologi"
                style={styles.inputlarge}
                onChangeText={setKondisi_umum}
                value={kondisi_umum}
                maxLength={1000}
                multiline
              />
              <TextInput
                placeholderTextColor="black"
                placeholder="Kegiatan/Assesment/Upaya Penanganan Darurat yang dilakukan"
                style={styles.inputlarge}
                onChangeText={setTindakan}
                value={tindakan}
                maxLength={1000}
                multiline
              />

              <TextInput
                placeholderTextColor="black"
                placeholder="Kendala/Kebutuhan mendesak/Potensi Bencana Susulan"
                style={styles.inputlarge}
                onChangeText={setKendala}
                value={kendala}
                maxLength={1000}
                multiline
              />

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

            <View style={styles.formContainer}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 'bold',
                  paddingTop: 15,
                  marginBottom: 10,
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
        </View>
      </ScrollView>
    </View>
  );
};

export default Pelaporan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#D5E5FB',
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
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 5,
    marginBottom: 1,
    justifyContent: 'center',
  },
  title1: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 15,
    marginBottom: 1,
    justifyContent: 'center',
  },
  inputlarge: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: '15%',
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
    borderRadius: 6,
    justifyContent: 'center',
    borderWidth: 1,
  },
  input2: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: '8%',
    marginTop: height * 0.02,
    borderRadius: 6,
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
  },
  backBtn: {
    paddingLeft: 5,
  },
  titleContainer: {
    flex: 1,
    paddingRight: 28,
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

  // picker: {
  //   borderRadius: 5,
  //   backgroundColor: '#ffffff',
  //   width: '87%',
  //   borderColor: 'black',
  //   height: 40,
  //   borderWidth: 1,
  //   marginBottom: 12,
  //   justifyContent: 'center',
  // },

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
});
