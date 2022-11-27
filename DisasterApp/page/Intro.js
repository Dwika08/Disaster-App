import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControlBase,
  
} from 'react-native';
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';

export default class App extends React.Component {
  state = {
    showApp: false,
    loading: true,
  };

  _onDone = async () => {
    this.setState({showApp: true});
    try {
      await AsyncStorage.setItem('showApp', '1');
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    if (this.state.showApp) {
      return <Home />;
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require('../img/wllp.png')}
            resizeMode="cover"
            style={styles.background}>
            <View style={styles.divider}></View>
            <Text style={styles.text}>Selamat Datang Di SiPENA</Text>
            <Text style={styles.text}>
              Hati-Hati & Tetap Waspada Daerah Sekitar
            </Text>
            <View style={styles.divider1}></View>
            <TouchableOpacity
              onPress={this._onDone}
              style={{
                width: '50%',
                marginTop: 10,
                backgroundColor: 'white',
                height: '4%',
                alignItems: 'center',
                borderRadius: 4,
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 20, color: 'black' }}>Mulai</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  background: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 211,
    width: 330,
    justifyContent: 'center',
  },
  divider: {
    margin: 280,
  },
  divider1: {
    margin: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  dotStyle: {
    backgroundColor: '#000000',
  },
  btn: {marginTop: 20, backgroundColor: 'red'},
});
