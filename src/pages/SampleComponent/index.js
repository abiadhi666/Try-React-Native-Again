import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Hallo</Text>
      <Home />
      <Text>Hallo</Text>
      <Text>Hallo</Text>
      <Photo />
      <TextInput
        style={{
          borderWidth: 1,
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 30,
        }}
      />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Home = () => {
  return <Text>World</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/100/100/any'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Box Green</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'http://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100}}
        />
        <Text>Profile</Text>
      </View>
    );
  }
}

export default SampleComponent