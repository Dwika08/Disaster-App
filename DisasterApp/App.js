import {StyleSheet, Text, View, BackHandler, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './page/Home';
import Intro from './page/Intro';
import Splash from './page/Splash';
import Map from './page/dashboard/Map';
import Pelaporan from './page/dashboard/Pelaporan';
import Rekap from './page/dashboard/Rekap';
import Tentang from './page/dashboard/Tentang';
import Rekap_Bencana from './page/dashboard/sub/Rekap_Bencana';
import Sub_Map from './page/dashboard/sub/Sub_Map';
import MapRn2 from './page/dashboard/MapRn2';
import Ionicons from 'react-native-vector-icons/Ionicons';
import No_Connection from './page/dashboard/sub/No_Connection';
import List_Data from './page/dashboard/sub/List_Data';
import Kritik from './page/dashboard/Kritik';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Stop', 'Apakah kamu ingin keluar ?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  }, []);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
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
          component={Tab1}
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
            headerShown: false,
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
      </Stack.Navigator> */}
      <Tab.Navigator
        initialRouteName="Splash"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Tentang') {
              iconName = focused ? 'alert-circle' : 'alert-circle';
            } else if (route.name === 'Rekap') {
              iconName = focused ? 'document' : 'document';
            } else if (route.name === 'List_Data') {
              iconName = focused ? 'map' : 'map';
            } else if (route.name === 'Pelaporan') {
              iconName = focused ? 'document-text' : 'document-text';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#21242A',
          tabBarInactiveTintColor: '#757575',
          tabBarStyle: [styles.tabbarStyle],
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          }}
          name="Splash"
          component={Splash}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          }}
          name="No_Connection"
          component={No_Connection}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          }}
          name="Intro"
          component={Intro}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            // tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Rekap"
          component={Rekap}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
          name="Map"
          component={Map}
        />
        <Tab.Screen
          options={{headerShown: false, tabBarButton: () => null}}
          name="Pelaporan"
          component={Pelaporan}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
          name="Tentang"
          component={Tentang}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: {display: 'none'},
          }}
          name="Rekap_Bencana"
          component={Rekap_Bencana}
        />
        <Tab.Screen
          options={{headerShown: false, tabBarButton: () => null}}
          name="Sub_Map"
          component={Sub_Map}
        />
        <Tab.Screen
          options={{headerShown: false, tabBarButton: () => null}}
          name="MapRn2"
          component={MapRn2}
        />
        <Tab.Screen
          options={{headerShown: false, title: 'Peta'}}
          name="List_Data"
          component={List_Data}
        />
        <Tab.Screen
          options={{headerShown: false, tabBarButton: () => null}}
          name="Kritik"
          component={Kritik}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabbarStyle: {
    // position: 'absolute',
    height: 50,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});
