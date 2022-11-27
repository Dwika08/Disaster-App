import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, Alert } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useNavigation, TabActions } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Kritik = () => {
  const navigation = useNavigation();
  const [kritik, setKritik] = useState();

  useEffect(() => {
    inputKritik();
  }, []);

  const inputKritik = () => {
    fetch('http://192.168.18.18/aplikasi/restapi.php?op=kritik', {
      method: 'post',
      body: JSON.stringify({
        kritik: kritik,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json.status);
        if (json.status == 'ok') {
          Alert.alert('', 'Pelaporan Berhasil');
        } else {
          Alert.alert('', 'Pelaporan Gagal');
        }
        // console.log(dataMarker);
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image source={require('../../img/left.png')} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Kritik & Saran</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>Kritik & Saran</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholderTextColor="black"
          placeholder="Masukan Kritik & Saran"
          onChangeText={setKritik}
          value={kritik}
        />
        <View style={styles.btn}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={inputKritik}>
            <Text style={styles.textStyle}>kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Kritik

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    paddingLeft: 5,
  },
  header: {
    height: height * 0.06,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    paddingTop: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: width * 0.046,
    textAlign: 'center',
    color: 'black',
  },
  titleContainer: {
    flex: 1,
    paddingRight: 28,
  },
  body: {
    height: '100%',
    width: '100%',
    padding: 20,
    backgroundColor: '#21242A',
  },
  input: {
    borderWidth: 1,
    marginTop: 20,
    height: '60%',
    width: '100%',
    borderRadius: 5,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    color: 'black'
  },
  text:{
    fontWeight: 'bold',
    fontSize: width * 0.046,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width: '47%',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#E53935',
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});