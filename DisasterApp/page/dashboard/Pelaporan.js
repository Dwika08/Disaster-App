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

  // slide 1 //
  const [id, setId] = useState();
  const [bencana, setBencana] = useState();
  const [datePicker, setDatePicker] = useState(false);
  const [dataBencana, setDataBencana] = useState();
  const [tgl, setTgl] = useState();
  const [penyebab, setPenyebab] = useState();
  const [ringan, setRingan] = useState();
  const [sedang, setSedang] = useState();
  const [berat, setBerat] = useState();
  ///
  // slide 2 //
  const [md, setMd] = useState();
  const [lr, setLr] = useState();
  const [lb, setLb] = useState();
  const [jiwa, setJiwa] = useState();
  const [kk, setKk] = useState();
  const [pelapor, setPelapor] = useState();
  const [tlp, setTlp] = useState();
  const [email, setEmail] = useState();
  ///

  const [kondisi, setKondisi] = useState();
  const [dampak, setDampak] = useState();

  const [pengungsi, setPengungsi] = useState();
  const [tindakan, setTindakan] = useState();

  const [uri, setUri] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState();

  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  const [ImageCamera, setImageCamera] = useState(null);
  const [ImageGalery, setImageGalery] = useState(null);

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
            setLong(a.nativeEvent.coordinate.longitude);
          }}
        />
      </MapView>
    );
  };

  useEffect(() => {
    // const callApi = async () => {
    //   await getData();
    // };
    // callApi();
    getPosition();
  }, []);

  // const options = {
  //   title: 'Select Image',
  //   type: 'library',
  //   options: {
  //     maxHeight: 200,
  //     maxWidth: 200,
  //     selectionLimit: 1,
  //     mediaType: 'photo',
  //     includeBase64: false,
  //   },
  // };

  // const handleLaunchCamera = async () => {
  //   const result = await launchCamera(options);

  //   setUri(result.assets[0].uri);
  //   setType(result.assets[0].type);
  //   setName(result.assets[0].fileName);

  //   setModalVisible(!modalVisible);
  // };

  // const handleLaunchGallery = async () => {
  //   const result = await launchImageLibrary(options);

  //   setUri(result.assets[0].uri);
  //   setType(result.assets[0].type);
  //   setName(result.assets[0].fileName);
  //   setModalVisible(!modalVisible);
  // };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('user cancelled image');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageCamera(data);
        console.log(data);
      }
    });
    setModalVisible(!modalVisible);
  };

  const openGalery = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('user cancelled image');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageGalery(data);
        console.log(data);
      }
    });

    setModalVisible(!modalVisible);
  };

  const Submit = () => {
    const tanggal = moment(tgl).format('YYYY-MM-DD');

    fetch('http://192.168.1.11/aplikasi/restapi.php?op=inputData', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_bencana_detail: bencana,
        tgl_bencana: tanggal,
        id_desa_detail: id,
        kondisi_umum: kondisi,
        dampak_bencana: dampak,
        pelapor: pelapor,
        pengungsi_jiwa_kk: pengungsi,
        tindakan: tindakan,
      }),
    })
      .then(res => res.json())
      .then(resp => {
        // console.log(resp.status);
        if (resp.status == 'ok') {
          Alert.alert('', 'Pelaporan Berhasil');
        } else {
          Alert.alert('', 'Pelaporan Gagal');
        }
      });
  };

  const getData = () => {
    fetch('http://192.168.1.13/aplikasi/restapi.php?op=input')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataBencana(json);
        // console.log(dataBencana);
      });
  };

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);

    const tgll = date.toISOString();
    setTgl(tgll);
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
              onPress={openGalery}>
              <Text style={styles.textStyle}>Galeri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={openCamera}>
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
                  selectedValue={bencana}
                  onValueChange={(itemValue, itemIndex) =>
                    setBencana(itemValue)
                  }
                  style={{color: 'black'}}>
                  <Picker.Item label="Pilih Bencana" value="" />
                  <Picker.Item label="Banjir" value="1" />
                  <Picker.Item label="Kebakaran" value="2" />
                  <Picker.Item label="Tanah Longsor" value="3" />
                  <Picker.Item label="Angin Kencang" value="4" />
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
                  selectedValue={id}
                  onValueChange={itemValue => setId(itemValue)}
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
                onChangeText={setPenyebab}
                value={penyebab}
                maxLength={500}
              />

              <Text style={styles.title1}>Dampak Bencana</Text>
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Rusak Ringan"
                style={styles.input}
                onChangeText={setRingan}
                value={ringan}
                maxLength={100}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Rusak Sedang"
                style={styles.input}
                onChangeText={setSedang}
                value={sedang}
                maxLength={100}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Rusak Berat"
                style={styles.input}
                onChangeText={setBerat}
                value={berat}
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
                onChangeText={setJiwa}
                value={jiwa}
                keyboardType="numeric"
                maxLength={3}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="KK"
                style={styles.input}
                onChangeText={setKk}
                value={kk}
                keyboardType="numeric"
                maxLength={3}
              />

              <Text style={styles.title1}>Informasi Pelapor/Instansi *</Text>
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Nama Pelapor"
                style={styles.input}
                onChangeText={setPelapor}
                value={pelapor}
                maxLength={200}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="No. Tlp Darurat"
                style={styles.input}
                onChangeText={setTlp}
                value={tlp}
                keyboardType="numeric"
                maxLength={12}
              />
              <TextInput
                multiline
                placeholderTextColor="black"
                placeholder="Email"
                style={styles.input}
                onChangeText={setEmail}
                value={email}
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
                onChangeText={setKondisi}
                value={kondisi}
                maxLength={1000}
                multiline
              />
              <TextInput
                placeholderTextColor="black"
                placeholder="Kegiatan/Assesment/Upaya Penanganan Darurat yang dilakukan"
                style={styles.inputlarge}
                onChangeText={setDampak}
                value={dampak}
                maxLength={1000}
                multiline
              />

              <TextInput
                placeholderTextColor="black"
                placeholder="Kendala/Kebutuhan mendesak/Potensi Bencana Susulan"
                style={styles.inputlarge}
                onChangeText={setTindakan}
                value={tindakan}
                maxLength={1000}
                multiline
              />

              <Text style={styles.title1}>File Upload Gambar</Text>
              <View>
                {ImageCamera != null && (
                  <Image
                    source={{uri: ImageCamera.uri}}
                    style={{height: 100, width: 200}}
                  />
                )}
                {ImageGalery != null && (
                  <Image
                    source={{uri: ImageGalery.uri}}
                    style={{height: 100, width: 200}}
                  />
                )}
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={[styles.input, styles.inputFoto]}>
                <Text style={styles.buttonText}>Pilih Foto</Text>
                {/* {name != null && <Text style={styles.buttonText}>✔</Text>} */}
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
                <Text style={styles.coordText}>Longitude : {long}</Text>
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
    backgroundColor: '#81D4FA',
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
    height: '5%',
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
