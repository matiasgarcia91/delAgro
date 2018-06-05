import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import MainButton from '../MainButton';
import Logo from '../Logo';

import styles from './styles';

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.onViewPress = this.onViewPress.bind(this);
  }
  onViewPress() {
    console.log('view photos');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.titleContainer} >
          <Text style={{fontSize:22, color:'#ff4611',marginBottom:10,marginTop:40}} >¡Bienvenido a Muuu!</Text>
          <Text> La aplicación donde podrás publicar lotes de {"\n"} ganado en venta y encontrar el que buscas.</Text>
        </View>
        <View style={styles.formContainer}>
          <MainButton onPress={this.onViewPress} title={'VER GANADO EN VENTA'} style={styles.bigButton,{marginTop:50, height: 50,width:250}} />

          <MainButton onPress={this.onViewPress} title={'PUBLICAR UN LOTE'} style={styles.bigButton,{marginTop:50, height:50,width:250}} />
        </View>
      </View>
    );
  }
}

WelcomeScreen.propTypes = {
};
