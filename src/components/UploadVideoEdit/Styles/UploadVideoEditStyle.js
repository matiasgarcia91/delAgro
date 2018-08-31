import { StyleSheet } from "react-native";
import Colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  videoContainer: {
    height: 400,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    color: Colors.specialGreen
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  sliderContainer: {
    flexDirection: "column",
    marginHorizontal: 30,
    //marginTop: 15,
    alignItems: "center"
  },
  customMarker: {
    height: 20,
    width: 20
  }
});
