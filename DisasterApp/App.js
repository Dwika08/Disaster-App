import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './page/Home';
import Intro from './page/Intro';
import Splash from './page/Splash';
import Map from './page/dashboard/Map';
import Pelaporan from './page/dashboard/Pelaporan';
import Rekap from './page/dashboard/Rekap';
import Tentang from './page/dashboard/Tentang';
import Rekap_Bencana from './page/dashboard/sub/Rekap_Bencana';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouter="Splash"
        ScreenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Intro"
          component={Intro}
        />
        <Stack.Screen
          options={{
            title: 'Pelaporan',
            headerTitleAlign: 'center',
          }}
          name="Pelaporan"
          component={Pelaporan}
        />
        <Stack.Screen
          options={{
            title: 'Map',
            headerTitleAlign: 'center',
          }}
          name="Map"
          component={Map}
        />
        <Stack.Screen
          options={{
            title: 'Rekap',
            headerTitleAlign: 'center',
          }}
          name="Rekap"
          component={Rekap}
        />
        <Stack.Screen
          options={{
            title: 'Tentang',
            headerTitleAlign: 'center',
          }}
          name="Tentang"
          component={Tentang}
        />
        <Stack.Screen
          options={{title: 'Rekap Bencana', headerTitleAlign: 'center'}}
          name="Rekap_Bencana"
          component={Rekap_Bencana}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
