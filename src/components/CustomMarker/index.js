import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import customMarker from "../../assets/images/icons/customMarker.png";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  customMarker: {
    height: 20,
    width: 20,
    tintColor: colors.navButtonGreen
  }
});


const CustomMarker = () => (
  <Image
    style={styles.customMarker}
    source={customMarker}
    resizeMode="contain"
  />
);
export default CustomMarker;
