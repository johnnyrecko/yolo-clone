import React from 'react';
import {Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';

const MONEY_DIMENSIONS = {width: 49 / 2, height: 26 / 2};
const SCREEN_DIMENSIONS = Dimensions.get('window');
const WIGGLE_ROOM = 100;

export class EmojiRain extends React.Component {
  FlippingImage = ({
    back = false,
    delay,
    duration = 1000,
    source,
    style = {},
  }) => (
    <Animatable.Image
      animation={{
        from: {
          rotateX: back ? '0deg' : '180deg',
          rotate: !back ? '180deg' : '0deg',
        },
        to: {
          rotateX: back ? '360deg' : '-180deg',
          rotate: !back ? '180deg' : '0deg',
        },
      }}
      duration={duration}
      delay={delay}
      easing="linear"
      iterationCount="infinite"
      useNativeDriver
      source={source}
      style={{
        ...style,
        backfaceVisibility: 'hidden',
      }}
    />
  );

  Swinging = ({amplitude, rotation = 7, delay, duration = 700, children}) => (
    <Animatable.View
      animation={{
        0: {
          translateX: -amplitude,
          translateY: -amplitude * 0.8,
          rotate: `${rotation}deg`,
        },
        0.5: {
          translateX: 0,
          translateY: 0,
          rotate: '0deg',
        },
        1: {
          translateX: amplitude,
          translateY: -amplitude * 0.8,
          rotate: `${-rotation}deg`,
        },
      }}
      delay={delay}
      duration={duration}
      direction="alternate"
      easing="ease-in-out"
      iterationCount="infinite"
      useNativeDriver>
      {children}
    </Animatable.View>
  );

  Falling = ({duration, delay, style, children}) => (
    <Animatable.View
      animation={{
        from: {translateY: -MONEY_DIMENSIONS.height - WIGGLE_ROOM},
        to: {translateY: SCREEN_DIMENSIONS.height + WIGGLE_ROOM},
      }}
      duration={duration}
      delay={delay}
      easing={t => Math.pow(t, 1.7)}
      iterationCount="infinite"
      useNativeDriver
      style={style}>
      {children}
    </Animatable.View>
  );

  randomize = max => Math.random() * max;

  range = count => {
    const array = [];
    for (let i = 0; i < count; i++) {
      array.push(i);
    }
    return array;
  };

  Rain = ({count = this.props.quantity, duration = 3000}) =>
    this.range(count)
      .map(i => this.randomize(1000))
      .map((flipDelay, i) => (
        <this.Falling
          key={i}
          duration={duration}
          delay={i * (duration / count)}
          style={{
            position: 'absolute',
            paddingHorizontal: WIGGLE_ROOM,
            left:
              this.randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) -
              WIGGLE_ROOM,
          }}>
          <this.Swinging
            amplitude={MONEY_DIMENSIONS.width / 5}
            delay={this.randomize(duration)}>
            <this.FlippingImage source={this.props.front} delay={flipDelay} />
            <this.FlippingImage
              source={this.props.back}
              delay={flipDelay}
              back
              style={{position: 'absolute'}}
            />
          </this.Swinging>
        </this.Falling>
      ));

  render() {
    return <this.Rain />;
  }
}
