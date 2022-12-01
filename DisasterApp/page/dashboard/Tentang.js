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
        <View style={styles.containerbody}>
          <View style={styles.image}>
            <View style={styles.bodyImage}>
              <Image
                style={styles.logo}
                source={require('../../img/logobpbd.png')}
              />
            </View>
            <View style={styles.bodyImage}>
              <Image
                style={styles.logo}
                source={require('../../img/logo.png')}
              />
            </View>
          </View>
          <Text style={styles.text2}>
            Jl. Selamanik No.29, Kutabanjarnegara, Kec. Banjarnegara, Kab.
            Banjarnegara, Jawa Tengah 53415 Telp: (0286) 591812
          </Text>
          <Text style={styles.text1}>
            Aplikasi ini dibuat untuk membantu masyarakat dalam memberikan
            informasi tentang pemetaan bencana alam di Kabupaten Banjarnegara,
            Serta untuk Penelitian Skripsi
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21242A',
  },
  image: {
    flexDirection: 'row',
  },
  bodyImage: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
    
  },
  logo: {
    width: 80,
    height: 80,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    
  },
  containerbody: {
    height: '50%',
    width: '92%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,    
  },
  text1: {
    fontSize: 14,
    color: 'black',
    marginTop: 20,
    height: 60,
    width: 300,
    textAlign: 'center',
    
  },
  text2: {
    width: 300,
    fontSize: 14,
    color: 'black',
    marginTop: 10,
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
    color: 'black',
  },
  titleContainer: {
    flex: 1,
    paddingRight: 28,
  },
});
