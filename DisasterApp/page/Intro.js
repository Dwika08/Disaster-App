import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from './Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 1,
    text1: 'Selamat Datang',
    text2: 'Ini Adalah Halaman Pertama Anda',
    image: require('../img/slide1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    text1: 'Hati - Hati',
    text2: 'Tetap Waspada Daerah Sekitar',
    image: require('../img/slide2.png'),
    backgroundColor: '#febe29',
  },
];

export default class App extends React.Component {
  state = {
    showRealApp: false,
    loading: true,
  };

  componentDidMount() {
    AsyncStorage.getItem('first_time').then(value => {
      this.setState({showRealApp: !!value, loading: false});
    });
  }

  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({showRealApp: true});
      this.props.navigation.navigate('Home');
    });
  };

  _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.logo} />
        <View style={styles.divider}></View>
        <Text style={styles.text}>{item.text1}</Text>
        <Text style={styles.text}>{item.text2}</Text>
        {item.key == 2 && (
          <TouchableOpacity
            onPress={this._onDone}
            style={{
              width: '25%',
              marginTop: 10,
              backgroundColor: '#4D87A1',
              height: '5%',
              alignItems: 'center',
              borderRadius: 4,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>Mulai</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  _onDone = () => {
    this.setState({showRealApp: true});
  };
  render() {
    if (this.state.loading) return <ActivityIndicator size="large" />;
    if (this.state.showRealApp) {
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
  logo: {
    height: 211,
    width: 330,
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
