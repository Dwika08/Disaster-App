import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Rekap = () => {
  const [dataBencana, setDataBencana] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View
      style={{
        padding: '2%',
        borderBottomWidth: 1,
        borderColor: 'black',
      }}>
      <TouchableOpacity
        onPress={() => {
          setId(item.ID);
          navigation.navigate('Rekap_Bencana', {id});
        }}
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{}}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
            {item.Desa} , kecamatan {item.Kecamatan}
          </Text>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>
            {item.Bencana}
          </Text>
        </View>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>
          {item.Tanggal}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const getData = () => {
    fetch('http://192.168.1.11/aplikasi/restapi.php?op=getDatabencana')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setDataBencana(json);
        // console.log(dataBencana);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Data Bencana</Text>
      <View style={styles.line} />
      <FlatList
        data={dataBencana}
        renderItem={renderItem}
        keyExtractor={item => item.ID}
      />
    </View>
  );
};

export default Rekap;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 50,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    height: 2,
    backgroundColor: 'Black',
    marginVertical: 10,
  },
});
