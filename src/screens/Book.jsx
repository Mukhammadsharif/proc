import React, {useMemo, useRef} from 'react';
import {ImageBackground, View, StyleSheet, Text, Alert} from 'react-native';
import {COLORS, dimension} from '../helpers/colors';
import BackgroundImage from '../assets/backgrounds/book_confirmed.png';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import CustomButton from '../components/CustomButton';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function Book({route}) {
  const navigation = useNavigation();
  const {date, time} = route.params;
  const snapPoints = useMemo(() => ['80%'], []);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={BackgroundImage}>
        <GestureHandlerRootView style={styles.contentContainer}>
          <BottomSheet
            index={0}
            enableDynamicSizing={false}
            snapPoints={snapPoints}
            handleIndicatorStyle={{display: 'none'}}>
            <BottomSheetScrollView
              contentContainerStyle={styles.contentContainer}>
              <Text style={styles.bottomTitle}>Booking Confirmed</Text>
              <Text style={styles.bottomDescription}>
                Thank you for booking with us!
              </Text>

              <View style={styles.input}>
                <Text style={styles.placeholder}>Date</Text>
                <Text style={styles.value}>{date}</Text>
              </View>

              <View style={styles.input}>
                <Text style={styles.placeholder}>Time</Text>
                <Text style={styles.value}>{time}</Text>
              </View>

              <CustomButton
                text={'Home'}
                style={{marginVertical: 40, width: '80%', alignSelf: 'center'}}
                onPress={() =>
                  navigation.navigate('TabScreen', {screen: 'Home'})
                }
              />
            </BottomSheetScrollView>
          </BottomSheet>
        </GestureHandlerRootView>
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
    paddingTop: 60,
  },
  contentContainer: {
    flex: 1,
  },
  bottomTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
  },
  bottomDescription: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.stroke,
    borderRadius: 12,
    paddingHorizontal: 20,
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholder: {
    color: COLORS.stroke,
  },
  time: {
    color: COLORS.black,
  },
});
