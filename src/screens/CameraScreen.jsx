import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {COLORS, dimension, FONTS} from '../helpers/colors';
import BackgroundImage from '../assets/backgrounds/track_background.png';
import QrCode from '../assets/icons/qr_code.png';
import CustomButton from '../components/CustomButton';
import {pointTypes, routes} from '../helpers/data';
import Line from '../assets/icons/line.png';
import LineActive from '../assets/icons/active_line.png';
import GeoIcon from '../assets/icons/detail_geo.png';
import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export default function CameraScreen({route}) {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(false);
  const [camera, setCamera] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState(null);

  const {hasPermission} = useCameraPermission();

  const device = useCameraDevice('back');

  const requestCameraPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();

    if (cameraPermission === 'authorized') {
      console.log('Camera permission already granted');
      return true;
    }

    if (cameraPermission === 'not-determined') {
      const newCameraPermission = await Camera.requestCameraPermission();
      if (newCameraPermission === 'authorized') {
        console.log('Camera permission granted');
        return true;
      }
    }

    // Alert.alert(
    //   'Camera Permission',
    //   'Camera permission is required to use this feature. Please enable it in your device settings.',
    // );
    return false;
  };

  useEffect(() => {
    const requestPermissions = async () => {
      await requestCameraPermission();
    };

    requestPermissions();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
      setProgress(true);
      setIsActive(true);
    },
  });
  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = time => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    if (route && route.params) {
      const {item} = route.params;
      setTask(item);
    } else {
      setTask(routes[0]);
    }

    () => {
      setTask(null);
    };
  }, [route]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={BackgroundImage}>
        {!progress ? (
          <>
            <Text style={styles.title}>Track Your Progress</Text>
            <Text style={styles.description}>
              To start, scan the QR code at the starting point.
            </Text>

            {camera ? (
              <Camera
                codeScanner={codeScanner}
                device={device}
                isActive
                style={styles.qr}
              />
            ) : (
              <>
                <Image source={QrCode} style={styles.qr} />

                <CustomButton
                  text={'Open QR scanner'}
                  style={{marginTop: 80}}
                  onPress={() => {
                    setCamera(true);
                  }}
                />
              </>
            )}
          </>
        ) : task ? (
          <View style={styles.progressContainer}>
            <Text style={styles.title}>Elapsed Time</Text>

            <Text style={styles.timer}>
              {formatTime(minutes)}:{formatTime(seconds)}
            </Text>

            <View style={styles.main}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.flex}
                contentContainerStyle={styles.scroll}>
                <Text style={styles.scanTitle}>{task?.name}</Text>

                <View style={styles.pointsContainer}>
                  {task?.checkpoints.map((checkpoint, index) => (
                    <View style={styles.point} key={index}>
                      <View
                        style={
                          index * checkpoint?.time < seconds
                            ? styles.circleActive
                            : styles.circle
                        }
                      />
                      {index !== 5 ? (
                        <Image
                          source={
                            index * checkpoint?.time < seconds
                              ? LineActive
                              : Line
                          }
                          style={styles.dashedBorder}
                        />
                      ) : (
                        ''
                      )}
                      <Text style={styles.pointTitle}>{pointTypes[index]}</Text>

                      <View style={styles.row}>
                        <Image source={GeoIcon} style={styles.geoIcon} />
                        <Text style={styles.route}>{checkpoint?.location}</Text>
                      </View>
                    </View>
                  ))}
                </View>

                <CustomButton
                  text={'Finish'}
                  style={{marginTop: 40}}
                  onPress={() => {
                    resetTimer();
                    setProgress(false);
                    navigation.navigate('Home');
                  }}
                />
              </ScrollView>
            </View>
          </View>
        ) : (
          ''
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimension.width,
    height: dimension.height,
    backgroundColor: COLORS.homeBackground,
    paddingTop: 40,
  },
  title: {
    fontSize: 34,
    fontFamily: FONTS.heavy,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.detailFont,
    marginTop: 10,
  },
  qr: {
    width: dimension.width * 0.7,
    height: dimension.width * 0.7,
    alignSelf: 'center',
    marginTop: 100,
  },
  timer: {
    fontSize: 70,
    fontFamily: FONTS.heavy,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  main: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '85%',
    height: '70%',
    alignSelf: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  progressContainer: {
    justifyContent: 'space-between',
    height: '100%',
  },
  flex: {
    flex: 1,
  },
  scroll: {
    paddingBottom: 100,
  },
  scanTitle: {
    fontSize: 26,
    fontFamily: FONTS.heavy,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
  },
  pointsContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
  },
  point: {
    position: 'relative',
    height: 80,
    paddingHorizontal: 20,
  },
  dashedBorder: {
    position: 'absolute',
    height: '100%',
    left: 0,
    width: 3,
  },
  pointTitle: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '600',
    marginTop: -5,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 25,
    backgroundColor: COLORS.detailFont,
    position: 'absolute',
    left: -6,
    zIndex: 101,
  },
  circleActive: {
    width: 15,
    height: 15,
    borderRadius: 25,
    backgroundColor: COLORS.main,
    position: 'absolute',
    left: -6,
    zIndex: 101,
  },
  geoIcon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
    marginRight: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
});
