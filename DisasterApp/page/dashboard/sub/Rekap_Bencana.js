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
        <Text>Kecamatan : {item.Kecamatan}</Text>
        <Text>Bencana : {item.Bencana}</Text>
        <Text>Tanggal : {item.Tanggal}</Text>
        <Text>Penyabab Kejadian : {item.Penyebab_Kejadian}</Text>
        <Text>Rusak Ringan : {item.Rusak_Ringan}</Text>
        <Text>Rusak Sedang : {item.Rusak_Sedang}</Text>
        <Text>Rusak Berat : {item.Rusak_Berat}</Text>
        <Text>Meninggal Dunia : {item.Meninggal_Dunia}</Text>
        <Text>Luka Ringan : {item.Luka_Ringan}</Text>
        <Text>Luka Berat : {item.Luka_Berat}</Text>
        <Text>Pengungsi Jiwa : {item.Pengungsi_Jiwa}</Text>
        <Text>Pengungsi KK : {item.Pengungsi_KK}</Text>
        <Text>Pelapor : {item.Pelapor}</Text>
        <Text>Tlp Darurat : {item.Tlp_Darurat}</Text>
        <Text>
          Kondisi Umum/Kronologi : {'\n'} {item.Kondisi}
        </Text>
        <Text>
          Kegiatan/Assesment/Upaya Penanganan Darurat yang dilakukan : {'\n'}
          {item.Tindakan}
        </Text>
        <Text>
          Kendala/Kebutuhan mendesak/Potensi Bencana Susulan : {'\n'}
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
    fontSize: 16,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    fontWeight: 'bold',
    backgroundColor: '#9EC8E4',
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
  },
  titleContainer: {
    flex: 1,
  },
});
