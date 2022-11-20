import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, { useState} from 'react';
import { TabActions, useNavigation } from '@react-navigation/native';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Sub_Map = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image source={require('../../../img/left.png')} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Map</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.dispatch(TabActions.jumpTo('Map'));
          }}>
          <Text style={styles.textBtn}>2021</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.dispatch(TabActions.jumpTo('MapRn2'));
          }}>
          <Text style={styles.textBtn}>2022</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Sub_Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    paddingLeft: 5,
  },
  header: {
    height: height * 0.065,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
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

  btnContainer: {
    bottom: height * 0.4,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  btn: {
    backgroundColor: '#03A9F4',
    width: 120,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
