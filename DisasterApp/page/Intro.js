import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from './Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const slides = [
  {
    key: 1,
    text1: 'Selamat Datang',
    text2: 'Ini Adalah Halaman Pertama Anda',
    image1: require('../img/wallp.png'),
    image2: require('../img/slide1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    text1: 'Hati - Hati',
    text2: 'Tetap Waspada Daerah Sekitar',
    image1: require('../img/wallp1.png'),
    image2: require('../img/slide2.png'),
    backgroundColor: '#febe29',
  },
];

export default class App extends React.Component {
  state = {
    showApp: false,
    loading: true,
  };

  _renderItem = ({item}) => {
    return (
      // <View style={styles.container}>
      <ImageBackground
        source={item.image1}
        resizeMode="cover"
        style={styles.background}>
        <Image source={item.image2} style={styles.logo} />
        <View style={styles.divider}></View>
        <Text style={styles.text}>{item.text1}</Text>
        <Text style={styles.text}>{item.text2}</Text>
        {item.key == 2 && (
          <TouchableOpacity
            onPress={this._onDone}
            style={{
              width: '25%',
              marginTop: 10,
              backgroundColor: '#9EC8E4',
              height: '5%',
              alignItems: 'center',
              borderRadius: 4,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>Mulai</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
      // </View>
    );
  };
  _onDone = async () => {
    this.setState({showApp: true});
    try {
      await AsyncStorage.setItem('showApp', '1');
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    if (this.state.showApp) {
      return <Home />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          dotStyle={{backgroundColor: 'black'}}
          activeDotStyle={{backgroundColor: '#4D87A1'}}
        />
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
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  dotStyle: {
    backgroundColor: '#000000',
  },
  btn: {marginTop: 20, backgroundColor: 'red'},
});
