import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import MainButton from '../MainButton';

import styles from './styles';

const DetailsText = ({ quantity, location, breed, weight, inspectionDate, comments }) => (
  <View style={{ flex: 1 }}>
    <View style={styles.textContainer}>
      <Text style={styles.caption}>Cantidad:</Text><Text style={styles.text}>{quantity}</Text>
      <Text style={styles.caption}>Ubicacion:</Text><Text style={styles.text}>{location}</Text>
      <Text style={styles.caption}>Raza:</Text><Text style={styles.text}>{breed}</Text>
      <Text style={styles.caption}>Peso:</Text><Text style={styles.text}>{weight}</Text>
      <Text style={styles.caption}>Fecha de inspeccion:</Text><Text style={styles.text}>{inspectionDate}</Text>
      <Text style={styles.caption}>Comentarios:</Text><Text style={styles.text}>{comments}</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <MainButton onPress={() => {}} />
      <MainButton onPress={() => {}} />
    </View>
  </View>
);

DetailsText.propTypes = {
  quantity: PropTypes.number,
  location: PropTypes.string,
  breed: PropTypes.string,
  weight: PropTypes.number,
  inspectionDate: PropTypes.string,
  comments: PropTypes.string,
};

DetailsText.defaultProps = {
  quantity: 0,
  location: '',
  breed: '',
  weight: 0,
  inspectionDate: '',
  comments: '',
};

export default DetailsText;
