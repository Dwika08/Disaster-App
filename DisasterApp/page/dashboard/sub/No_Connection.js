import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const No_Connection = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../img/no_internet.png')}
      />
      <Text style={{fontSize: 16, fontweight: 'bold', color: 'black'}}>
        No Internet Access
      </Text>
    </View>
  );
};

export default No_Connection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 348,
    height: 348,
  },
});
