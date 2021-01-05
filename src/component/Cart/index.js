import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import cart from '../../assets/icon/cart.png'

const Cart = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {
    paddingTop: 8,
    fontWeight: '700',
    color: '#777777',
    fontSize: 12,
  },
  notif: {
    fontSize: 12,
    color: '#ffffff',
    backgroundColor: '#6fcf97',
    borderRadius: 25,
    height: 24,
    width: 24,
    padding: 4,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Cart