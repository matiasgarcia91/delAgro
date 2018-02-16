import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';

import cow from '../../assets/images/cow.png';
import CardFooter from '../CardFooter';

import styles from './styles';

export default class CardItem extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Image source={cow} style={styles.image} />
        </View>
        <View style={styles.footer}>
          <CardFooter />
        </View>
      </View>
    );
  }
}
