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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, TabActions} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Rekap = () => {
  const [dataBencana, setDataBencana] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={{
        padding: '2%',
        borderBottomWidth: 1,
        borderColor: 'black',
      }}>
      <TouchableOpacity
        onPress={() => {
          setId(item.ID);
          navigation.dispatch(TabActions.jumpTo('Rekap_Bencana', {id}));
        }}
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
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
      <FlatList
        data={dataBencana}
        renderItem={renderItem}
        keyExtractor={item => item.ID}
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
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: width * 0.046,
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
  },
});
