import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, dimension, FONTS} from '../helpers/colors';
import BackIcon from '../assets/icons/back.png';
import GeoIcon from '../assets/icons/detail_geo.png';
import Line from '../assets/icons/line.png';
import {pointTypes} from '../helpers/data';
import CustomButton from '../components/CustomButton';
export default function RouteDetail({route}) {
  const {item} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{item?.name}</Text>

        <View style={styles.row}>
          <Image source={GeoIcon} style={styles.geoIcon} />
          <Text style={styles.route}>{item?.route}</Text>
        </View>

        <Image source={item?.image} style={styles.image} />

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Difficulty {'\n'}
            {'\n'} <Text style={styles.bold}>{item?.difficulty}</Text>
          </Text>

          <Text style={styles.description}>
            Distance {'\n'}
            {'\n'} <Text style={styles.bold}>{item?.distance} km</Text>
          </Text>

          <Text style={styles.descriptionLast}>
            Checkpoints {'\n'}
            {'\n'} <Text style={styles.bold}>{item?.checkpointsCount}</Text>
          </Text>
        </View>

        <Text style={styles.descriptionText}>{item?.description}</Text>

        <Text style={styles.scanTitle}>Scan Points</Text>

        <View style={styles.pointsContainer}>
          {item?.checkpoints.map((checkpoint, index) => (
            <View style={styles.point} key={index}>
              <View style={styles.circle} />
              {index !== 5 ? (
                <Image source={Line} style={styles.dashedBorder} />
              ) : (
                ''
              )}
              <Text style={styles.pointTitle}>{pointTypes[index]}</Text>

              <View style={styles.row}>
                <Image source={GeoIcon} style={styles.geoIcon} />
                <Text style={styles.route}>{checkpoint?.name}</Text>
              </View>
            </View>
          ))}
        </View>

        <CustomButton
          text={'Start'}
          style={{marginTop: 40}}
          onPress={() =>
            navigation.navigate('TabScreen', {
              screen: 'CameraScreen',
              params: {item},
            })
          }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimension.width,
    height: dimension.height,
    backgroundColor: COLORS.homeBackground,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 34,
    fontFamily: FONTS.heavy,
    fontWeight: '700',
    marginTop: 20,
  },
  flex: {
    flex: 1,
  },
  main: {
    paddingBottom: 200,
  },
  backIcon: {
    width: 50,
    height: 50,
    objectFit: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  geoIcon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
    marginRight: 7,
  },
  route: {
    color: COLORS.detailFont,
    fontWeight: '400',
    fontSize: 15,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 25,
    marginTop: 20,
  },
  description: {
    color: COLORS.detailFont,
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    borderColor: COLORS.stroke,
    borderRightWidth: 1,
    width: '33%',
    paddingVertical: 5,
  },
  descriptionLast: {
    color: COLORS.detailFont,
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    width: '33%',
  },
  bold: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: 18,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingVertical: 5,
  },
  descriptionText: {
    color: COLORS.detailFont,
    fontSize: 16,
    fontWeight: '300',
    marginTop: 20,
  },
  scanTitle: {
    fontSize: 26,
    fontFamily: FONTS.heavy,
    fontWeight: '700',
    marginTop: 20,
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
});
