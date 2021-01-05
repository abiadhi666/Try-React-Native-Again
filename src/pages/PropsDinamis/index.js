import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{textAlign: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{width: 70, height: 70, borderRadius: 70/2}}
      />
      <Text style={{textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <Text>Materi Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
            <Story
                title="Wildan"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/71521884_474750349836978_7255191105820426240_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=Zb5JAgI3Y3oAX9KAkxs&tp=1&oh=8f379301453ab835b92ab51ee8946b45&oe=60127900"
            />
            <Story
                title="SR"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/119115447_603631540303051_2440337827758507444_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=iSExOIK6JXYAX94GTOU&tp=1&oh=a59fb9739d57e687638311a11aa3314b&oe=6010E4EF"
            />
            <Story
                title="Anita"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/120442981_770149277169465_4742600159187077176_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=pEwbRMxr_WEAX_SsQuA&tp=1&oh=d1c2933c69d0d467a565ccfcdc4e9866&oe=6011511C"
            />
            <Story
                title="Wildan"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/71521884_474750349836978_7255191105820426240_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=Zb5JAgI3Y3oAX9KAkxs&tp=1&oh=8f379301453ab835b92ab51ee8946b45&oe=60127900"
            />
            <Story
                title="SR"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/119115447_603631540303051_2440337827758507444_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=iSExOIK6JXYAX94GTOU&tp=1&oh=a59fb9739d57e687638311a11aa3314b&oe=6010E4EF"
            />
            <Story
                title="Anita"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/120442981_770149277169465_4742600159187077176_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=pEwbRMxr_WEAX_SsQuA&tp=1&oh=d1c2933c69d0d467a565ccfcdc4e9866&oe=6011511C"
            />
            <Story
                title="Wildan"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/71521884_474750349836978_7255191105820426240_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=Zb5JAgI3Y3oAX9KAkxs&tp=1&oh=8f379301453ab835b92ab51ee8946b45&oe=60127900"
            />
            <Story
                title="SR"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/119115447_603631540303051_2440337827758507444_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=iSExOIK6JXYAX94GTOU&tp=1&oh=a59fb9739d57e687638311a11aa3314b&oe=6010E4EF"
            />
            <Story
                title="Anita"
                image="https://instagram.fbdo6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/120442981_770149277169465_4742600159187077176_n.jpg?_nc_ht=instagram.fbdo6-2.fna.fbcdn.net&_nc_ohc=pEwbRMxr_WEAX_SsQuA&tp=1&oh=d1c2933c69d0d467a565ccfcdc4e9866&oe=6011511C"
            />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
