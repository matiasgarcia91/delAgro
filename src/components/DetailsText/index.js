import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import MainButton from '../MainButton';

import styles from './styles';

const DetailsText = ({
  lot: {
    quantity,
    state,
    weight,
    description,
    category,
    breed,
  },
  toggleModal },
) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <View style={styles.row} >
        <Text style={styles.caption}>Cantidad:</Text><Text style={styles.text}>{quantity} {category.name}</Text>
      </View>
      <View style={styles.row} >
        <Text style={styles.caption}>Ubicacion:</Text><Text style={styles.text}>{state}</Text>
      </View>
      <View style={styles.row} >
        <Text style={styles.caption}>Raza:</Text><Text style={styles.text}>{breed.name}</Text>
      </View>
      <View style={styles.row} >
        <Text style={styles.caption}>Peso:</Text><Text style={styles.text}>{weight} kg</Text>
      </View>
      <View style={styles.row} >
        <Text style={styles.caption}>Comentarios:</Text><Text style={styles.text}>
          {description}
        </Text>
      </View>
    </View>
    <View style={styles.buttonsContainer}>
      <MainButton onPress={toggleModal} title={'Contactar'} style={styles.button} />
    </View>
  </View>
);

DetailsText.propTypes = {
  lot: PropTypes.shape({
    quantity: PropTypes.number,
    location: PropTypes.string,
    weight: PropTypes.number,
    inspectionDate: PropTypes.string,
    comments: PropTypes.string,
    category: PropTypes.shape(),
    breed: PropTypes.shape(),
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default DetailsText;
