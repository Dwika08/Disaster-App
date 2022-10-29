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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, TabActions} from '@react-navigation/native';
import {TabView, SceneMap} from 'react-native-tab-view';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const FirstRoute = () => {
  const navigation = useNavigation();
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={{
        padding: '5%',
        borderRadius: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#9EC8E4',
      }}>
      <TouchableOpacity
        onPress={() => {
          setId(item.ID);
          navigation.dispatch(TabActions.jumpTo('Rekap_Bencana', {id}));
        }}
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.list}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
            {item.Desa} , kecamatan {item.Kecamatan}
          </Text>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>
            {item.Bencana}
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>
            {item.Tanggal}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const [dataBencana, setDataBencana] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch('http://192.168.1.13/aplikasi/restapi.php?op=getDatabencana')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataBencana(json);
        // console.log(dataBencana);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataBencana}
        renderItem={renderItem}
        keyExtractor={item => item.ID}
      />
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
        borderRadius: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#5D5FEF',
      }}>
      <TouchableOpacity
        onPress={() => {
          setId(item.ID);
          navigation.dispatch(TabActions.jumpTo('Rekap_Bencana', {id}));
        }}
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.list}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
            {item.Desa} , kecamatan {item.Kecamatan}
          </Text>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>
            {item.Bencana}
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>
            {item.Tanggal}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const [dataBencana, setDataBencana] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch('http://192.168.1.13/aplikasi/restapi.php?op=getDatabencana1')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataBencana(json);
        // console.log(dataBencana);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataBencana}
        renderItem={renderItem}
        keyExtractor={item => item.ID}
      />
    </SafeAreaView>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Rekap = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '2021'},
    {key: 'second', title: '2022'},
  ]);
  const navigation = useNavigation();
  return (
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
          <Text style={styles.headerText}>Rekap</Text>
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
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
});
