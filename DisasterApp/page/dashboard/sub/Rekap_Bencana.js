import {
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation, TabActions} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Rekap_Bencana = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params.id;

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState();
  const getData = () => {
    fetch('http://192.168.1.13/aplikasi/restapi.php?op=getBencanaDetail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then(res => res.json())
      .then(resp => {
        setData(resp);
        // console.log(resp);
      });
  };

  const render = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{item.Desa}</Text>
        <Text style={styles.list}>
          ~ Kecamatan :{'\r\r\r'} {item.Kecamatan}
        </Text>
        <Text style={styles.list}>
          ~ Bencana :{'\r\r\r'} {item.Bencana}
        </Text>
        <Text style={styles.list}>
          ~ Tanggal :{'\r\r\r'} {item.Tanggal}
        </Text>
        <Text style={styles.list}>
          ~ Penyabab Kejadian : {'\r\n'}
          {item.Penyebab_Kejadian}
        </Text>
        <Text style={styles.list}>
          ~ Rusak Ringan :{'\r\r\r'} {item.Rusak_Ringan}
        </Text>
        <Text style={styles.list}>
          ~ Rusak Sedang : {'\r\r\r'}
          {item.Rusak_Sedang}
        </Text>
        <Text style={styles.list}>
          ~ Rusak Berat : {'\r\r\r'}
          {item.Rusak_Berat}
        </Text>
        <Text style={styles.list}>
          ~ Meninggal Dunia :{'\r\r\r'} {item.Meninggal_Dunia}
        </Text>
        <Text style={styles.list}>
          ~ Luka Ringan :{'\r\r\r'} {item.Luka_Ringan}
        </Text>
        <Text style={styles.list}>
          ~ Luka Berat :{'\r\r\r'} {item.Luka_Berat}
        </Text>
        <Text style={styles.list}>
          ~ Pengungsi Jiwa :{'\r\r\r'} {item.Pengungsi_Jiwa}
        </Text>
        <Text style={styles.list}>
          ~ Pengungsi KK :{'\r\r\r'} {item.Pengungsi_KK}
        </Text>
        <Text style={styles.list}>
          ~ Pelapor :{'\r\r\r'} {item.Pelapor}
        </Text>
        <Text style={styles.list}>
          ~ Tlp Darurat :{'\r\r\r'} {item.Tlp_Darurat}
        </Text>
        <Text style={styles.list}>
          ~ Kondisi Umum/Kronologi : {'\n'} {item.Kondisi}
        </Text>
        <Text style={styles.list}>
          ~ Kegiatan/Assesment/Upaya Penanganan Darurat yang dilakukan : {'\n'}
          {item.Tindakan}
        </Text>
        <Text style={styles.list}>
          ~ Kendala/Kebutuhan mendesak/Potensi Bencana Susulan : {'\n'}
          {item.Kendala}
        </Text>
      </View>
    );
  };
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
          <Text style={styles.headerText}>Detail Bencana</Text>
        </View>
      </View>
      <Text style={styles.textTitle}>Data Bencana Detail</Text>
      <FlatList
        data={data}
        renderItem={render}
        keyExtractor={item => item.ID}
      />
    </View>
  );
};

export default Rekap_Bencana;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: '#9EC8E4',
  },
  card: {
    backgroundColor: '#9EC8E4',
    padding: 15,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  list: {
    color: 'black',
    fontSize: 16,
    paddingBottom: 3,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    fontWeight: 'bold',
    backgroundColor: '#9EC8E4',
    color: 'black',
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
