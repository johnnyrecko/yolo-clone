import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { View } from 'react-native-animatable';

import Icon from 'react-native-vector-icons/AntDesign';

import RNReactNativeSharingWinstagram from '@nickfla1/react-native-share-instagram';

STYLES = StyleSheet.create({
  FOOTER_CONTENT: {
    paddingVertical: 40,
    paddingHorizontal: 40,
    marginBottom: 70,
    bottom: 0,
  },
  SIGNIN_TEXT: {
    color: 'white',
    fontSize: 17,
    lineHeight: 22,
    alignSelf: 'center',
  },
  SIGNIN_BUTTON: {
    backgroundColor: 'rgb(44,128,236)',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    paddingRight: 20,
    paddingLeft: 20,
    height: 55
  },
  TERMS_TEXT: {
    color: 'black',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    paddingTop: 20,
    paddingRight: 20
  },
  CONTAINER: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  FULL: {flex: 1, justifyContent: 'flex-end'},
});

export class MAIN_SCREEN extends React.Component {

  render() {
    return <View style={STYLES.FULL}>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <Text style={{fontSize: 20, color:  'gray'}}>
         No messages yet
       </Text>
      </View>

          <View style={STYLES.FOOTER_CONTENT}>
            <TouchableOpacity
              onPressIn={() => this.props.navigation.navigate('MAIN_SCREEN')}
              style={STYLES.SIGNIN_BUTTON}
              onPress={() => this.props.navigation.navigate('SHARE_SCREEN')}>
              <Icon
                name='instagram'
                style={{
                  fontSize: 45,
                  padding: 5,
                  color: 'white',
                }}
              />

              <Text style={STYLES.SIGNIN_TEXT}>Get Anonymous Messages</Text>
            </TouchableOpacity>
          </View>
          
          </View>
  }
}
