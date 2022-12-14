import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {TabActions, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(async () => {
      const showApp = await AsyncStorage.getItem('showApp');
      const userId = await AsyncStorage.getItem('userId');
      if (showApp != 1) {
        navigation.navigate('Intro');
      } else if (userId == null) {
        navigation.dispatch(TabActions.jumpTo('Home'));
      }
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/logo1.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.text1}>SIPENA</Text>
        {/* <Text style={styles.text2}>Bencana Online</Text> */}
      </View>
    </View>
  );
};

const navig = () => {};

export default Splash;

const styles = StyleSheet.create({
  text1: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 60,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21242A',
  },
});
