import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('===> constructor');
//     this.state = {
//       subscriber: 300,
//     };
//   }

//   componentDidMount() {
//     console.log('===> component didmount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('===> componentdidupdate');
//   }

//   componentWillUnmount() {
//     console.log('===> componentwillunmount');
//   }

//   render() {
//     console.log('===> render');
//     return (
// <View>
//   <View
//     style={{
//       flexDirection: 'row',
//       backgroundColor: '#c8d6e5',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//     }}>
//     <View
//       style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
//     <View
//       style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
//     <View
//       style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
//     <View
//       style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
//   </View>
//   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//     <Text>Content</Text>
//     <Text>Content</Text>
//     <Text>Content</Text>
//     <Text>Content</Text>
//     <Text>Content</Text>
//   </View>
//   <View
//     style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
//     <Image
//       source={{uri: 'http://placeimg.com/100/100/any'}}
//       style={{width: 100, height: 100, borderRadius: 50}}
//     />
//     <View style={{marginLeft: 10}}>
//       <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bang Abay</Text>
//       <Text>{this.state.subscriber} Subscriber</Text>
//     </View>
//   </View>
// </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return() => {
      console.log('did update');
    }
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber(400);
  //   }, 2000);
  // }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image
          source={{uri: 'http://placeimg.com/100/100/any'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bang Abay</Text>
          <Text>{subscriber} Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
