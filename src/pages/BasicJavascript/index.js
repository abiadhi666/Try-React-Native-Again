import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  // primitive
  const name = 'Abi Adhitama';
  let age = 23;
  const isMan = true;

  // complex
  const animalPet = {
    name: 'miaw',
    age: 2,
    type: 'cat',
    isAnimalLocal: true,
    color: 'yellow',
    parents: {
      dad: 'Kaisar',
      mom: 'Kuin',
    }, // Object
  };

  const sapaOrang = (title, poppy) => {
    return console.log(`Hallo ${title}, usia anda ${poppy}`);
  };

  sapaOrang('Abi', 23);

  const namaOrang = ['Abi', 'Prawito', 'Milla']; //object - array

  typeof namaOrang; //output nya pasti object

  const sapaHewan = (objectAnimal) => {
    // let hasilSapa = '';
    // if (objectAnimal.name === 'miaw') {
    //   hasilSapa = 'Hallo miaw';
    // } else {
    //   hasilSapa = 'What is Animal?';
    // }
    // return hasilSapa;
    return objectAnimal.name === 'miaw' ? 'Hallo miawww' : 'What is Animal?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript</Text>

      <Text>Nama: {name}</Text>
      <Text>{sapaHewan(animalPet)}</Text>
      {namaOrang.map((orang) => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
