import {StyleSheet, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

const Rekap_Bencana = () => {
  const route = useRoute();

  const id = route.params.id;

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState();
  const getData = () => {
    fetch('http://192.168.1.11/aplikasi/restapi.php?op=getBencanaDetail', {
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
        <Text>
          Kecamatan:
          {item.Kecamatan}
        </Text>
        <Text>
          Bencana:
          {item.Bencana}
        </Text>
        <Text>
          Tanggal:
          {item.Tanggal}
        </Text>
        <Text>
          Pelapor: {'\n'}
          {item.Pelapor}
        </Text>
        <Text>
          Pengungsi:
          {item.Pengungsi}
        </Text>
        <Text>
          Kondisi{'\n'} {item.Kondisi}
        </Text>
        <Text>
          Dampak: {'\n'} {item.Dampak}
        </Text>
        <Text>
          Tindakan: {'\n'} {item.Tindakan}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
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
    width: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
});
