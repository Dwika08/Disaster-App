import {
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation, TabActions} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Rekap_Bencana = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {params} = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    // console.log(params);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [route]);

  const [data, setData] = useState();
  const getData = () => {
    fetch('http://192.168.18.18/aplikasiV2/restapi.php?op=getBencanaDetail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: params,
      }),
    })
      .then(res => res.json())
      .then(resp => {
        setData(resp);
        setRefresh(true);
        console.log('');
        setRefresh(false);
      });
  };

  const render = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{item.Desa}</Text>
        <View style={styles.list}>
          <Image
            source={{
              uri: 'http://192.168.18.18/aplikasiV2/html/img/img/' + item.Img,
            }}
            style={{width: '100%', height: 200}}
          />
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Kecamatan:</Text>
          <Text style={styles.dataText}>{item.Kecamatan}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Bencana:</Text>
          <Text style={styles.dataText}>{item.Bencana}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Tanggal: </Text>
          <Text style={styles.dataText}>{item.Tanggal}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Nama KK: </Text>
          <Text style={styles.dataText}>{item.Nama_kk}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Jumlah Jiwa: </Text>
          <Text style={styles.dataText}>{item.Jumlah_jiwa}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Rt: </Text>
          <Text style={styles.dataText}>{item.Rt}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Rw: </Text>
          <Text style={styles.dataText}>{item.Rw}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Rusak Berat: </Text>
          <Text style={styles.dataText}>{item.Rusak_Berat}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Rusak Sedang: </Text>
          <Text style={styles.dataText}>{item.Rusak_Sedang}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Rusak Ringan: </Text>
          <Text style={styles.dataText}>{item.Rusak_Ringan}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Terancam: </Text>
          <Text style={styles.dataText}>{item.Terancam}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Meninggal Dunia: </Text>
          <Text style={styles.dataText}>{item.meninggal_dunia}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Luka: </Text>
          <Text style={styles.dataText}>{item.luka_luka}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Kronologi: </Text>
          <Text style={styles.dataText}>{item.Kronologi}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Kerugian: </Text>
          <Text style={styles.dataText}>Rp. {item.Kerugian}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Latitude: </Text>
          <Text style={styles.dataText}>{item.Latitude}</Text>
        </View>
        <View style={styles.list}>
          <Text style={{color: 'black'}}>Longitude: </Text>
          <Text style={styles.dataText}>{item.Longitude}</Text>
        </View>
      </View>
    );
  };

  // function ambilData()
  // {
  //   let temp = [...data];
  //   setRefresh(true);
  //   console.log('')
  //   setData(temp);
  //   setRefresh(false)
  // };

  const [refresh, setRefresh] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate('Rekap');
          }}>
          <Image source={require('../../../img/left.png')} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Riwayat Detail</Text>
        </View>
      </View>
      {loading ? (
        <View style={styles.loadContainer}>
          <ActivityIndicator visible={loading} size="large" color="#00ff00" />
        </View>
      ) : (
        <FlatList
          data={data}
          onRefresh={() => getData()}
          refreshing={refresh}
          renderItem={render}
          keyExtractor={item => item.ID}
        />
      )}
    </View>
  );
};

export default Rekap_Bencana;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#21242A',
  },
  loadContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#D7D8D6',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 40,
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  list: {
    marginVertical: 5,
    color: 'black',
  },
  dataText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    fontWeight: 'bold',
    backgroundColor: '#21242A',
    color: 'white',
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
    paddingRight: 50,
  },
});
