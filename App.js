import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('assets/profil.jpg')}
            style={{
              height: 60,
              width: 60,
              borderRadius: '50%',
              marginLeft: 5,
            }}></Image>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                marginLeft: 8,
              }}>
              {' '}
              ahmdirvn__{' '}
            </Text>
          </View>
        </View>
        <Ionicons
          name="ios-ellipsis-horizontal"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </View>
      <View style={{ flex: 3, backgroundColor: 'darkorange' }}>
        <Image
          source={require('assets/FEED.jpg')}
          style={{
            height: '100%',
            width: '100%',
          }}></Image>
      </View>
      <View
        style={{
          flex: 1 / 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome
            name="heart"
            size={24}
            color="red"
            style={{ marginLeft: 10 }}
          />
          <Feather
            name="message-circle"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <Feather
            name="send"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
        <FontAwesome5
          name="bookmark"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </View>
      <View
        style={{
          flex: 2 / 3,
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '700',
            marginLeft: 8,
          }}>
          {' '}
          1080 Likes{' '}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              marginLeft: 8,
            }}>
            {' '}
            ahmdirvn__{' '}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
            }}>
            {' '}
            Hello #hello{' '}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 10,
            fontWeight: '300',
            marginLeft: 8,
            marginBottom: 9,
          }}>
          {' '}
          1 years ago{' '}
        </Text>
      </View>
      <View
        style={{
          flex: 3 / 4,
          backgroundColor: 'white',
          borderTopWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Foundation name="home" size={24} color="black" />
        <Ionicons name="search" size={24} color="black" />
        <Octicons name="diff-added" size={24} color="black" />
        <FontAwesome name="heart" size={24} color="black" />
        <FontAwesome5 name="user-alt" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Flex;
