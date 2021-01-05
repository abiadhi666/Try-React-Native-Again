import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import macbook from '../../assets/img/macbook.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}> Styling Component </Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          borderRadius: 20,
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image source={macbook} style={styles.image} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12,
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 2}}>
          New Macbook Pro 2019
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 16,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  image: {
    width: 188,
    height: 107,
  },
});

export default StylingComponent