import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
  Alert,
  TextInput,
  View,
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
import moment from 'moment';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Pelaporan = () => {
  const [date, setDate] = useState(new Date());

  const [id, setId] = useState();
  const [datePicker, setDatePicker] = useState(false);
  const [dataBencana, setDataBencana] = useState();
  const [bencana, setBencana] = useState();
  const [tgl, setTgl] = useState();
  const [lokasi, setLokasi] = useState();
  const [kondisi, setKondisi] = useState();
  const [dampak, setDampak] = useState();
  const [pelapor, setPelapor] = useState();
  const [pengungsi, setPengungsi] = useState();
  const [tindakan, setTindakan] = useState();
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

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
    fetch('http://192.168.1.11/aplikasi/restapi.php?op=input')
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
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Pelaporan Bencana</Text>

        <View style={styles.picker}>
          <Picker
            selectedValue={bencana}
            onValueChange={(itemValue, itemIndex) => setBencana(itemValue)}>
            <Picker.Item label="Pilih Bencana" value="" />
            <Picker.Item label="Banjir" value="1" />
            <Picker.Item label="Kebakaran" value="2" />
            <Picker.Item label="Tanah Longsor" value="3" />
            <Picker.Item label="Angin Kencang" value="4" />
          </Picker>
        </View>
        <View style={styles.picker}>
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
        <View style={styles.picker}>
          <Picker
            selectedValue={id}
            onValueChange={itemValue => setId(itemValue)}>
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
          placeholder="Kondisi Umum / Kronologi"
          style={styles.inputlarge}
          onChangeText={setKondisi}
          value={kondisi}
        />

        <TextInput
          placeholder="Dampak Bencana"
          style={styles.inputlarge}
          onChangeText={setDampak}
          value={dampak}
        />

        <TextInput
          placeholder="Pelapor"
          style={styles.inputlarge}
          onChangeText={setPelapor}
          value={pelapor}
        />

        <TextInput
          placeholder="Pengungsi Jiwa/KK"
          style={styles.inputlarge}
          onChangeText={setPengungsi}
          value={pengungsi}
        />

        <TextInput
          placeholder="Tindakan yang sudah dilakukan"
          style={styles.inputlarge}
          onChangeText={setTindakan}
          value={tindakan}
        />
        <View style={styles.mapContainer}>
          <Map />
          <Text style={styles.petunjukText}>
            *tahan dan geser marker untuk menentukan titik
          </Text>

          <Text style={styles.coordText}>Latitude : {lat}</Text>
          <Text style={styles.coordText}>Longitude : {long}</Text>
        </View>

        <View style={styles.buttonstyle}>
          <Button title="Simpan" onPress={Submit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Pelaporan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mapcontainer: {
    alignItems: 'center',
    height: 150,
    width: 30,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 16,
    paddingLeft: 15,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 20,
    marginBottom: 10,
  },
  inputlarge: {
    borderRadius: 5,
    width: '87%',
    margin: 10,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    height: 100,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },

  inputnumber: {
    borderRadius: 5,
    width: '80%',
    margin: 10,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    height: 55,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },
  picker: {
    borderRadius: 5,
    backgroundColor: '#ffffff',
    width: '87%',
    borderColor: 'black',
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    justifyContent: 'center',
  },

  buttonstyle: {
    width: 200,
    paddingTop: 10,
    paddingBottom: 30,
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
    backgroundColor: 'blue',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
