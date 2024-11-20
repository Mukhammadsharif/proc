import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';
import GeoIcon from '../assets/icons/geo.png';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import ChevronRightIcon from '../assets/icons/chevron_right.png';
import {useNavigation} from '@react-navigation/native';

export default function RouteItem({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RouteDetail', {item})}
      style={styles.container}>
      <ImageBackground
        source={item?.image}
        style={styles.imageBackground}
        imageStyle={styles.backgroundImage}>
        <VibrancyView
          reducedTransparencyFallbackColor={'white'}
          blurRadius={10}
          style={styles.blur}
          blurType={'regular'}
          blurAmount={1}>
          <Text style={styles.name}>{item?.name}</Text>
          <View style={styles.row}>
            <Image source={GeoIcon} style={styles.geoIcon} />
            <Text>{item?.route}</Text>
          </View>
        </VibrancyView>

        <Image source={ChevronRightIcon} style={styles.chevronRight} />

        <View style={styles.footer}>
          <BlurView
            blurRadius={25}
            style={styles.footerBlur}
            blurType={'dark'}
            blurAmount={1}
          />
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
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '97%',
    height: 300,
    marginTop: 25,
    alignSelf: 'center',
    borderRadius: 25,
    position: 'relative',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  backgroundImage: {
    borderRadius: 25,
  },
  name: {
    color: COLORS.black,
    fontSize: 26,
    fontFamily: FONTS.bold,
    fontWeight: '700',
    marginTop: 20,
    paddingLeft: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  geoIcon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
    marginRight: 10,
  },
  blur: {
    flex: 0.3,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  chevronRight: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  footer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.4,
    alignSelf: 'center',
    marginBottom: 8,
    borderRadius: 25,
    position: 'relative',
  },
  footerBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 25,
  },
  description: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    borderColor: COLORS.stroke,
    borderRightWidth: 1,
    width: '33%',
  },
  descriptionLast: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    width: '33%',
  },
  bold: {
    fontWeight: 'bold',
  },
});
