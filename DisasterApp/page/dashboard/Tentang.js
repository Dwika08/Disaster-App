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
      </View>

      <View style={styles.body}>
      <Text style={styles.headerText}>Tentang</Text>
        <View style={styles.containerbody1}>
        
          <Text style={styles.text1}>
            Aplikasi ini dibuat untuk membantu masyarakat dalam memberikan
            informasi tentang pemetaan bencana alam di Kabupaten Banjarnegara
          </Text>
          
        </View>
        {/* <View style={styles.containerbody}>
          <View style={styles.buttonContainer}></View>
        </View> */}
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
    paddingTop: 100,
  },
  containerbody1: {
    height: '20%',
    width: '92%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonContainer1: {
    width: '80%',
    height: 360,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    height: '40%',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text1: {
    fontSize: 14,
    color: 'black',
    marginTop: 50,
    height: 200,
    width: 300,
    textAlign: 'center',
  },
  text2: {
    fontSize: 14,
    color: 'black',
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
