import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/UploadVideoEditStyle";
import Video from "react-native-video";
import Colors from "../../styles/colors";
// import Images from "../Themes/Images";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { NavigationActions } from 'react-navigation';
import CustomMarker from "../CustomMarker";
import { ProcessingManager, VideoPlayer } from "react-native-video-processing";
import RNGRP from "react-native-get-real-path";
import NavBarCamara from '../NavBarCamara';
import colors from "../../styles/colors";

function zeroPadd(value) {
  let prefix = ''
  if (value < 10) {
    prefix = '0'
  }
  return `${prefix}${value}`
}

export default class UploadVideoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      currentTimeS: "00:00",
      videoTime: 0,
      videoTimeS: "00:00",
      start: 0,
      startS: "00:00",
      end: 60,
      endS: "00:00",
      pause: false,
      video: null,
    };
  }

  loadVideoDurations = (duration, gallery = false) => {
    var min, sec, videoTimeEnd, durationInSeconds, end;
    if (gallery) {
      end = 60;
      if(durationInSeconds < 60) end = durationInSeconds;
      min = Math.floor(end / 60);
      sec = end % 60;
      videoTimeEnd = zeroPadd(min) + ":" + zeroPadd(sec);
      durationInSeconds = duration;
    } else {
      // from the camera
      videoTimeEnd = duration;
      var aux = duration.split(":");
      min = parseInt(aux[0]);
      sec = parseInt(aux[1]);
      min = min * 60;
      durationInSeconds = min + sec;
      end = durationInSeconds;
    }
    this.setState({ videoTime: durationInSeconds, end, endS: videoTimeEnd });
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({video: navigation.state.params.uploadVideo});
    console.log(this);
    var durationInSeconds = 0;
    const filePath = navigation.state.params.uploadVideo || '';
    if (!this.props.time) {
      ProcessingManager.getVideoInfo(filePath).then(info => {
        durationInSeconds = Math.floor(info.duration);
        this.loadVideoDurations(durationInSeconds, true);
      });
    }
    if (this.props.time) {
      this.loadVideoDurations(this.props.time, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stop) {
      this.setState({ pause: true });
      // this.props.videoActions.stop(false);
    }
  }

  playStop = () => {
    this.player.seek(this.state.start);
    this.setState({ pause: !this.state.pause });
  };

  onEnd = () => {
    this.setState({ pause: true });
    this.player.seek(this.state.start);
  };

  onProgress = data => {
    const {currentTime} = data;
    var min = 0;
    if (currentTime > 59) {
      min = Math.floor(currentTime / 60);
    }
    var sec =  Math.floor(currentTime % 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    this.setState({ currentTime, currentTimeS: "0" + min + ":" + sec });
    if (currentTime >= this.state.end) {
      this.setState({ pause: true });
      this.player.seek(this.state.start);
    }
  };

  onVideoLoaded = () => {
    this.playStop();
  }

  multiSliderValuesChange = values => {
    const { start, end } = this.state;
    let newStart = values[0];
    let newEnd = values[1];

    if ( newStart !== undefined && newStart !== start ) {
      /* const difference = end - newStart;
      if(difference > 60){
        newEnd -= start - newStart;
      }
      console.log(newStart, start); */
      this.setState({ start: newStart });
      const min = 0;
      if (newStart > 59) {
        min = Math.floor(newStart / 60);
      }
      const sec = newStart % 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      this.setState({ startS: "0" + min + ":" + sec });
      this.player.seek(start);
    }

    if (newEnd !== undefined && newEnd !== end) {
      /* const difference = newEnd - start;
      if(difference > 60){
        newStart += newEnd - end;
        this.setState({ start: newStart });
      } */
      this.setState({ end: newEnd });
      min = 0;
      if (newEnd > 59) {
        min = Math.floor(newEnd / 60);
      }
      sec = newEnd % 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      this.setState({ endS: "0" + min + ":" + sec });
    }


  };

  onNextPress = () => {
    const { start, end } = this.state;
    const { navigation } = this.props;
    console.log(this);
    const options = {
      startTime: start,
      endTime: end,
      /* quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
      saveToCameraRoll: true, // default is false // iOS only
      saveWithCurrentDate: true, // default is false // iOS only */
    };
    RNGRP.getRealPathFromURI(navigation.state.params.uploadVideo).then(filePath => {
      filePath = filePath || navigation.state.params.uploadVideo;
      ProcessingManager.trim(filePath, options)
      .then(data => {
        console.log('Data', data);
        const navigateToDetails = NavigationActions.navigate({
          routeName: 'Publish',
          params: { video: data },
        });
        navigation.dispatch(navigateToDetails);
      })
      .catch(error => console.log('Error', error));
    });
  }

  render() {
    const { currentTimeS, pause, startS, endS, videoTime, start, end, video } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
      <NavBarCamara navigation={this.props.navigation} video={video} title="Editar Video" onNextPress={this.onNextPress} />
        {navigation && navigation.state.params.uploadVideo && (
          <TouchableOpacity onPress={this.playStop}>
            <View style={styles.videoContainer}>
              <Video
                source={{ uri: video }} // Can be a URL or a local file.
                ref={ref => {
                  this.player = ref;
                }} // Store reference
                rate={1.0} // 0 is paused, 1 is normal.
                volume={1.0} // 0 is muted, 1 is normal.
                muted={false} // Mutes the audio entirely.
                paused={pause} // Pauses playback entirely.
                resizeMode="cover" // Fill the whole screen at aspect ratio.*
                repeat={false} // Repeat forever.
                onProgress={this.onProgress}
                onEnd={this.onEnd}
                onLoad={this.onVideoLoaded}
                playInBackground={false} // Audio continues to play when app entering background.
                playWhenInactive={false} // [iOS] Video continues to play when control or notification center are shown.
                ignoreSilentSwitch={"ignore"} // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                progressUpdateInterval={1000} // [iOS] Interval to fire onProgress (default to ~250ms)
                style={styles.backgroundVideo}
              />
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.timeContainer}>
          <Text>{startS}</Text>
          <Text style={{fontWeight: 'bold', color: colors.darkGreen, fontSize: 16}}>{currentTimeS}</Text>
          <Text>{endS}</Text>
        </View>

        <View style={styles.sliderContainer}>
          {videoTime != 0 && (
            <MultiSlider
              trackStyle={{ height: 2, backgroundColor: Colors.lightGreen }}
              selectedStyle={{ backgroundColor: Colors.lightGreen }}
              unselectedStyle={{ backgroundColor: Colors.darkGreen }}
              values={[start, end]}
              sliderLength={250}
              onValuesChange={this.multiSliderValuesChange}
              min={0}
              max={videoTime}
              step={1}
              customMarker={CustomMarker}
            />
          )}
        </View>
      </View>
    );
  }
}
