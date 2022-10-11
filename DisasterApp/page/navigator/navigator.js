import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Map from '../dashboard/Map';
import Pelaporan from '../dashboard/Pelaporan';
import Rekap from '../dashboard/Rekap';
import Tentang from '../dashboard/Tentang';

const Tab = createBottomTabNavigator();

const navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Pelaporan" component={Pelaporan} />
        <Tab.Screen name="Rekap" component={Rekap} />
        <Tab.Screen name="Tentang" component={Tentang} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default navigator;

const styles = StyleSheet.create({});
