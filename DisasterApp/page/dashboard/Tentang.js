import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, TabActions} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Tentang = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image source={require('../../img/left.png')} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Tentang</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.containerbody1}>
          <View style={styles.buttonContainer1}>
            <Text style={styles.text1}>
              Aplikasi ini dibuat untuk membantu masyarakat dalam memberikan
              informasi tentang pemetaan bencana alam di Kabupaten Banjarnegara,
              serta melaporkan kejadian bencana alam yang telah terjadi di
              wilayahnya.
            </Text>
          </View>
        </View>
        <View style={styles.containerbody}>
          <View style={styles.buttonContainer}>
            <Text style={styles.text2}>Dwika Julian Azhar</Text>
            <Text style={styles.text2}>1803040009</Text>
            <Text style={styles.text2}>Fakultas Teknik & Sains</Text>
            <Text style={styles.text2}>
              Universitas Muhammadiyah Purwokerto
            </Text>
            <Text style={styles.text2}>Copyright @ 2022 DwikaJA</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#9EC8E4',
  },
  containerbody: {
    height: '20%',
    width: '92%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerbody1: {
    height: '30%',
    width: '92%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonContainer1: {
    width: '80%',
    height: '70%',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text1: {
    fontSize: 14,
    color: 'black',
    marginTop: 1,
    textAlign: 'center',
  },
  text2: {
    fontSize: 14,
    color: 'black',
    marginBottom: 3,
    textAlign: 'center',
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
