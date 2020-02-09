import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {View} from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import randomColor from 'randomcolor';
import ImageMarker from 'react-native-image-marker';

import {TextInput} from 'react-native';

/* import {EmojiRain} from './components/EmojiRain'; */

import RNReactNativeSharingWinstagram from '@nickfla1/react-native-share-instagram';
import {getQuestion} from './functions/getQuestion';

/* Assets */
import BACKGROUND from './assets/background.jpg';
import COOL from './assets/cool.png';
import CAKE from './assets/cake.png';
import FIRE from './assets/fire.png';
import HOURGLASS from './assets/hourglass.png';
import HEART_RED from './assets/heart-red.png';
import HEART_YELLOW from './assets/heart-yellow.png';
import SCARED from './assets/scared.png';
import SMILING from './assets/smiling.png';
import SMIRK from './assets/smirk.png';
import {pickPhoto} from './functions/pickPhoto';

STYLES = StyleSheet.create({
  OPTIONS_ROOT: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    /* borderColor: 'rgb(1, 175, 255)',
    borderWidth: 2, */
    marginTop: 25,
  },
  TEXT_INPUT: {
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    flexDirection: 'column',
    padding: 20,
  },
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
    backgroundColor: 'rgb(1, 175, 255)',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: 20,
    paddingLeft: 20,
    height: 45,
    width: '100%',
  },
  TERMS_TEXT: {
    color: 'black',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    paddingTop: 20,
    paddingRight: 20,
  },
  CONTAINER: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  FULL: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});

export class SHARE_SCREEN extends React.Component {
  state = {
    message: '',
    messageBackground: 'white',
    base64toShare: '',
    photoBackground: '',
  };

  toInstagram() {
    ImageMarker.markText({
      src: this.state.photoBackground
        ? {uri: this.state.photoBackground}
        : BACKGROUND,
      text: this.state.message,
      position: 'center',
      color: 'black',
      fontName: 'Roboto',
      fontSize: 45,
      scale: 1,
      markerScale: 0.5,
      quality: 100,
      saveFormat: 'base64',
      textBackgroundStyle: {
        type: 'stretchX',
        paddingX: 25,
        paddingY: 25,
        padding: 1000,
        color: this.state.messageBackground,
      },
    })
      .then(base => {
        /*  alert(base.substr(22)) */
        RNReactNativeSharingWinstagram.shareWithInstagram(
          'photo',
          base.substr(22),
          message => {
            if (message) alert(message);
          },
          error => {
            alert(error.message); // error callback for IOs only
          },
        );
      })
      .catch(err => {
        console.log(err, 'err');
        this.setState({
          loading: false,
          err,
        });
      });
  }

  render() {
    return (
      <ImageBackground
        source={
          this.state.photoBackground
            ? {uri: this.state.photoBackground}
            : BACKGROUND
        }
        style={STYLES.FULL}>
        {/*        <EmojiRain front={SMIRK} back={SMIRK} quantity={5} />
       <EmojiRain front={COOL} back={COOL} quantity={5} />
       <EmojiRain front={SMILING} back={SMILING} quantity={5} />
       <EmojiRain front={HEART_RED} back={HEART_RED} quantity={5} />
       <EmojiRain front={SCARED} back={SCARED} quantity={5} />
       <EmojiRain front={HOURGLASS} back={HOURGLASS} quantity={5} />
       <EmojiRain front={HEART_YELLOW} back={HEART_YELLOW} quantity={5} />
       <EmojiRain front={FIRE} back={FIRE} quantity={5} /> */}

        <View
          style={{
            width: '80%',
            flexDirection: 'column',
          }}>
          <TextInput
            value={this.state.message}
            multiline={true}
            placeholder="Type your message here."
            maxLength={75}
            style={{
              ...STYLES.TEXT_INPUT,
              backgroundColor: this.state.messageBackground,
            }}
            onChangeText={text => this.setState({message: text})}
            autoCorrect={false}
            keyboardType="visible-password"
          />

          <TouchableOpacity
            onPressIn={() => this.toInstagram()}
            style={STYLES.SIGNIN_BUTTON}>
            <Text style={STYLES.SIGNIN_TEXT}>Send</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom options */}
        <View style={STYLES.OPTIONS_ROOT}>
          <TouchableOpacity>
            <FontAwesome5
              onPress={() => this.setState({message: getQuestion()})}
              name="dice"
              style={{fontSize: 45, padding: 10, color: 'rgb(1, 175, 255)'}}
            />
          </TouchableOpacity>
{/*           
          <TouchableOpacity>
            <Ionicon
              onPress={() => {
                let color = randomColor();
                this.setState({messageBackground: color});
              }}
              name="md-color-palette"
              style={{fontSize: 55, padding: 10, color: 'rgb(1, 175, 255)'}}
            />
          </TouchableOpacity>
 */}
          <TouchableOpacity>
            <MaterialIcon
              onPress={() => {
                const setPhotoBackground = photo => {
                  this.setState({photoBackground: photo.path});
                  console.log(photo.path);
                };
                pickPhoto(setPhotoBackground);
              }}
              name="add-a-photo"
              style={{fontSize: 55, padding: 10, color: 'rgb(1, 175, 255)'}}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
