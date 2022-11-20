import {
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  BackHandler,
  DatePickerIOSBase,
  ImageBackground,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import No_Connection from './dashboard/sub/No_Connection';
import NetInfo from '@react-native-community/netinfo';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Home = () => {
  const navigation = useNavigation();
  const [internet, setInternet] = useState(true);
  const Map = () => {
    navigation.navigate('Map');
  };
  const Pelaporan = () => {
    navigation.navigate('Pelaporan');
  };
  const Rekap = () => {
    navigation.navigate('Rekap');
  };
  const Tentang = () => {
    navigation.navigate('Tentang');
  };
  const Sub_Map = () => {
    navigation.navigate('Sub_Map');
  };
  useEffect(() => {
    setInterval(() => {
      koneksi();
    }, 3000);
  }, []);

  const koneksi = () => {
    NetInfo.fetch().then(state => {
      setInternet(state.isConnected);
    });
  };
  return (
    <View style={styles.container}>
      {internet && (
        <ImageBackground
          source={require('../img/wallp2.png')}
          style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../img/wave.png')} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Aplikasi Bencana Online</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={Pelaporan}
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 20,
                }}>
                <Image source={require('../img/reader.png')} />
                <Text style={styles.textMenu}>Pelaporan</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={Sub_Map}
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  backgroundColor: 'white',
                }}>
                <Image source={require('../img/map.png')} />
                <Text style={styles.textMenu}>Maps</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={Rekap}
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  backgroundColor: 'white',
                }}>
                <Image source={require('../img/document-text.png')} />
                <Text style={styles.textMenu}>Rekap</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={Tentang}
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  backgroundColor: 'white',
                }}>
                <Image source={require('../img/information-circle.png')} />
                <Text style={styles.textMenu}>Tentang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
      {!internet && <No_Connection />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    marginBottom: '25%',
    flexDirection: 'row',
    padding: 20,
    marginTop: 15,
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    paddingTop: 15,
    justifyContent: 'flex-start',
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  logoContainer: {
    width: '20%',
  },
  logo: {
    width: 57,
    height: 53,
  },
  body: {
    paddingHorizontal: '5%',
    height: '20%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '48%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#EBEBEB',
  },
  textMenu: {
    color: 'black',
    fontSize: 18,
    marginTop: 3,
    fontWeight: 'bold',
  },
});
