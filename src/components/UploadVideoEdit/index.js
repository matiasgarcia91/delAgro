import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Video from 'react-native-video';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { NavigationActions } from 'react-navigation';
import { ProcessingManager } from 'react-native-video-processing';
import RNGRP from 'react-native-get-real-path';
import styles from './Styles/UploadVideoEditStyle';
import CustomMarker from '../CustomMarker';
import NavBarCamara from '../NavBarCamara';
import Colors from '../../styles/colors';

function zeroPadd(value) {
  let prefix = '';
  if (value < 10) {
    prefix = '0';
  }
  return `${prefix}${value}`;
}

function getTimeText(timeInSeconds) {
  const min = Math.floor(timeInSeconds / 60);
  const sec = Math.floor(timeInSeconds % 60);
  return `${zeroPadd(min)}:${zeroPadd(sec)}`;
}

export default class UploadVideoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      currentTimeS: '00:00',
      videoTime: 0,
      videoTimeS: '00:00',
      start: 0,
      startS: '00:00',
      end: 60,
      endS: '00:00',
      pause: false,
      video: null,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({ video: navigation.state.params.uploadVideo });
    let durationInSeconds = 0;
    const filePath = navigation.state.params.uploadVideo || '';
    if (!this.props.time) {
      ProcessingManager.getVideoInfo(filePath).then((info) => {
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

  onNextPress = () => {
    const { start, end, video } = this.state;
    const { navigation } = this.props;
    const options = {
      startTime: start,
      endTime: end,
      /* quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
      saveToCameraRoll: true, // default is false // iOS only
      saveWithCurrentDate: true, // default is false // iOS only */
    };
    if (Platform.OS === 'android') {
      RNGRP.getRealPathFromURI(video).then((filePath) => {
        filePath = filePath || video;
        ProcessingManager.trim(filePath, options)
          .then((data) => {
            const navigateToDetails = NavigationActions.navigate({
              routeName: 'Publish',
              params: { video: data },
            });
            navigation.dispatch(navigateToDetails);
          })
          .catch(error => console.log('Error', error));
      });
    } else {
      ProcessingManager.trim(video, options)
        .then((data) => {
          const navigateToDetails = NavigationActions.navigate({
            routeName: 'Publish',
            params: { video: data },
          });
          navigation.dispatch(navigateToDetails);
        })
        .catch(error => console.log('Error', error));
    }
  }

  onVideoLoaded = () => {
    this.playStop();
  }

  onProgress = (data) => {
    const { currentTime } = data;
    this.setState({ currentTime, currentTimeS: getTimeText(currentTime) });
    if (currentTime >= this.state.end) {
      this.setState({ pause: true });
      this.player.seek(this.state.start);
    }
  };

  onEnd = () => {
    this.setState({ pause: true });
    this.player.seek(this.state.start);
  };

  loadVideoDurations = (duration, gallery = false) => {
    let min,
      sec,
      videoTimeEnd,
      durationInSeconds,
      end;
    durationInSeconds = duration;
    if (gallery) {
      end = 60;
      if (durationInSeconds < 60) end = durationInSeconds;
      videoTimeEnd = getTimeText(end);
    } else {
      // from the camera
      videoTimeEnd = duration;
      const aux = duration.split(':');
      min = parseInt(aux[0], 10);
      sec = parseInt(aux[1], 10);
      min *= 60;
      durationInSeconds = min + sec;
      end = durationInSeconds;
    }
    this.setState({ videoTime: durationInSeconds, end, endS: videoTimeEnd });
  };


  playStop = () => {
    this.player.seek(this.state.start);
    this.setState({ pause: !this.state.pause });
  };


  multiSliderValuesChange = (values) => {
    const { start, end } = this.state;
    let newStart = values[0];
    let newEnd = values[1];

    if (newStart !== undefined && newStart !== start) {
      const difference = end - newStart;
      if (difference > 60) {
        newEnd = newStart + 60;
      }
      this.player.seek(newStart);
      this.setState({currentTime: newStart, currentTimeS: getTimeText(newStart)});
    }

    if (newEnd !== undefined && newEnd !== end) {
      const difference = newEnd - start;
      if (difference > 60) {
        newStart = newEnd - 60;
        this.player.seek(newStart);
        this.setState({currentTime: newStart, currentTimeS: getTimeText(newStart)});
      }
    }
    this.setState({ start: newStart, end: newEnd, startS: getTimeText(newStart), endS: getTimeText(newEnd) });
  };


  render() {
    const { currentTimeS, pause, startS, endS, videoTime, start, end, video } = this.state;

    return (
      <View style={styles.container}>
        <NavBarCamara navigation={this.props.navigation} video={video} title="Editar Video" onNextPress={this.onNextPress} />
        {video && (
          <TouchableOpacity onPress={this.playStop}>
            <View style={styles.videoContainer}>
              <Video
                source={{ uri: video }} // Can be a URL or a local file.
                ref={(ref) => {
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
                ignoreSilentSwitch={'ignore'} // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                progressUpdateInterval={1000} // [iOS] Interval to fire onProgress (default to ~250ms)
                style={styles.backgroundVideo}
              />
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.timeContainer}>
          <Text>{startS}</Text>
          <Text style={{ fontWeight: 'bold', color: Colors.darkGreen, fontSize: 16 }}>{currentTimeS}</Text>
          <Text>{endS}</Text>
        </View>

        <View style={styles.sliderContainer}>
          {videoTime !== 0 && (
            <MultiSlider
              trackStyle={{ height: 2, backgroundColor: Colors.lightGreen }}
              selectedStyle={{ backgroundColor: Colors.lightGreen }}
              unselectedStyle={{ backgroundColor: Colors.darkGreen }}
              values={[start, end]}
              sliderLength={250}
              onValuesChangeFinish={this.multiSliderValuesChange}
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
