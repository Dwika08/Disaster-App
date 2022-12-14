import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, TabActions} from '@react-navigation/native';
import {TabView, SceneMap} from 'react-native-tab-view';
import No_Connection from './sub/No_Connection';
import NetInfo from '@react-native-community/netinfo';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const FirstRoute = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={{
        padding: '3%',
        borderRadius: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#21242A',
      }}>
      <TouchableOpacity
        onPress={() => {
          setId(item.ID);
          navigation.navigate('Rekap_Bencana', {
            params: item.ID,
          });
        }}
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.list}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
            {item.Desa} , kecamatan {item.Kecamatan}
          </Text>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
            {item.Bencana}
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
            {item.Tanggal}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const ListEmptyView = () => {
    return (
      <View style={styles.headertext}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {' '}
          No Data Available...
        </Text>
      </View>
    );
  };
  const [dataBencana, setDataBencana] = useState();
  const [id, setId] = useState();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const getData = () => {
    fetch('http://192.168.1.9/aplikasiV2/restapi.php?op=getDatabencana')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataBencana(json);
        setRefresh(true);
        setRefresh(false);

        // console.log(dataBencana);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadContainer}>
          <ActivityIndicator visible={loading} size="large" color="#00ff00" />
        </View>
      ) : (
        <FlatList
          data={dataBencana}
          renderItem={renderItem}
          keyExtractor={item => item.ID}
          ListEmptyComponent={ListEmptyView}
          onRefresh={() => getData()}
          refreshing={refresh}
        />
      )}
    </SafeAreaView>
  );
};

const SecondRoute = () => {
  const navigation = useNavigation();
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={{
        padding: '5%',
        // borderRadius: 15,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'white',
        // marginHorizontal: 10,
        // marginVertical: 5,
        backgroundColor: '#21242A',
      }}>
      <TouchableOpacity
        onPress={() => {
          setId(item.ID);
          navigation.navigate('Rekap_Bencana', {
            params: item.ID,
          });
        }}
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.list}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
            {item.Desa} , kecamatan {item.Kecamatan}
          </Text>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14}}>
            {item.Bencana}
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 13}}>
            {item.Tanggal}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const ListEmptyView = () => {
    return (
      <View style={styles.headertext}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {' '}
          No Data Available...
        </Text>
      </View>
    );
  };
  const [dataBencana, setDataBencana] = useState();
  const [id, setId] = useState();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const getData = () => {
    fetch('http://192.168.1.9/aplikasiV2/restapi.php?op=getDatabencana1')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataBencana(json);
        setRefresh(true);
        setRefresh(false);
        // console.log(dataBencana);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadContainer}>
          <ActivityIndicator visible={loading} size="large" color="#00ff00" />
        </View>
      ) : (
        <FlatList
          data={dataBencana}
          renderItem={renderItem}
          keyExtractor={item => item.ID}
          ListEmptyComponent={ListEmptyView}
          onRefresh={() => getData()}
          refreshing={refresh}
        />
      )}
    </SafeAreaView>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Rekap = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [internet, setInternet] = useState(true);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '2021'},
    {key: 'second', title: '2022'},
  ]);
  useEffect(() => {
    setInterval(() => {
      koneksi();
    }, 3000);
  }, []);

  const koneksi = () => {
    NetInfo.fetch().then(state => {
      // console.log(state.isConnected);
      setInternet(state.isConnected);
    });
  };

  return (
    <View style={styles.container}>
      {internet && (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Image source={require('../../img/left.png')} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.headerText}>Riwayat</Text>
            </View>
          </View>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            swipeEnabled={false}
          />
        </SafeAreaView>
      )}
      {!internet && <No_Connection />}
    </View>
  );
};
export default Rekap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height,
    // width: width,
    backgroundColor: 'white',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: '#white',
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
  list: {
    paddingBottom: 5,
    paddingTop: 10,
  },
  headertext: {
    marginTop: width * 0.7,
    height: 40,
    justifyContent: 'center',
  },
  loadContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
