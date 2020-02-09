import * as React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { EmojiRain } from './components/EmojiRain';
import Icon from 'react-native-vector-icons/AntDesign';

/* Assets */
import COOL from './assets/cool.png';
import CAKE from './assets/cake.png';
import FIRE from './assets/fire.png';
import HOURGLASS from './assets/hourglass.png';
import HEART_RED from './assets/heart-red.png';
import HEART_YELLOW from './assets/heart-yellow.png';
import SCARED from './assets/scared.png';
import SMILING from './assets/smiling.png';
import SMIRK from './assets/smirk.png';

STYLES = StyleSheet.create({
  FOOTER_CONTENT: {
    paddingVertical: 40,
    paddingHorizontal: 40,
    marginBottom: 70,
    bottom: 0,
  },
  SIGNIN_TEXT: {
    color: 'white',
    fontSize: 18,
    lineHeight: 22,
    alignSelf: 'center',
  },
  SIGNIN_BUTTON: {
    backgroundColor: 'rgb(44,128,236)',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
  },
  TERMS_TEXT: {
    color: 'black',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 20,
  },
  CONTAINER: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  FULL: {flex: 1, justifyContent: 'flex-end'},
});

export class SIGN_IN_SCREEN extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <EmojiRain front={SMIRK} back={SMIRK} quantity={5} />

        <View style={STYLES.FULL}>
          <View style={STYLES.FOOTER_CONTENT}>
            <TouchableOpacity
              onPressIn={() => this.props.navigation.navigate('MAIN_SCREEN')}
              style={STYLES.SIGNIN_BUTTON}
              onPress={() => {}}>
              <Icon
                name="instagram"
                style={{
                  fontSize: 50,
                  padding: 5,
                  paddingRight: 10,
                  color: 'white',
                }}
              />

              <Text style={STYLES.SIGNIN_TEXT}>Sign in with Instagram</Text>
            </TouchableOpacity>

            <Text style={STYLES.TERMS_TEXT}>
              By signing you agree with the Terms of Service and Privacy Policy.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
