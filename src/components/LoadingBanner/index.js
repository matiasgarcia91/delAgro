import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.creamBackground,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
  },
});

export default class LoadingBanner extends Component {
    render() {
        const { title } = this.props;
        return (
        <View style={styles.bar}>
        <View style={{ flex: 3, alignItems: 'center' }}>
            <Text style={styles.text}>{title}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 40 }}>
            <ActivityIndicator size="small" color="#ff5000" />
        </View>
        </View>
        );
    }
}