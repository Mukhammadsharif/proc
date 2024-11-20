import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import {Calendar, CalendarProvider} from 'react-native-calendars';
import {COLORS, dimension} from '../helpers/colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {TextInputMask} from 'react-native-masked-text';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function CalendarScreen() {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState('');
  const [indexNumber, setIndexNumber] = useState(-1);
  const [time, setTime] = useState('');

  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['100%'], []);
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleDayPress = day => {
    setSelectedDay(day.dateString);
    handleSnapPress(0);
    setIndexNumber(0); // Set the selected day
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      <CalendarProvider date={new Date().toISOString().split('T')[0]}>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDay]: {
              selected: true,
              selectedColor: COLORS.main,
              selectedTextColor: COLORS.white,
            },
          }}
          monthFormat={'MMMM yyyy'}
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          enableSwipeMonths={true}
          style={styles.calendar}
          theme={{
            backgroundColor: COLORS.homeBackground,
            calendarBackground: COLORS.homeBackground,
            arrowColor: COLORS.main,
            monthTextColor: COLORS.main,
            dateTextColor: COLORS.main,
            todayTextColor: COLORS.main,
            textMonthFontWeight: 'bold',
            dayTextColor: COLORS.main,
          }}
        />
      </CalendarProvider>

      <GestureHandlerRootView style={styles.container}>
        <BottomSheet
          index={indexNumber}
          enableDynamicSizing={false}
          snapPoints={snapPoints}
          handleIndicatorStyle={{display: 'none'}}
          style={{borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
          <BottomSheetScrollView
            contentContainerStyle={styles.contentContainer}>
            <Text style={styles.bottomTitle}>Book a Repair</Text>

            <TextInputMask
              type={'datetime'}
              options={{format: 'HH:mm'}}
              value={time}
              onChangeText={text => {
                setTime(text);
              }}
              style={styles.input}
              placeholder={'Time'}
              placeholderTextColor={COLORS.stroke}
            />

            <TextInput
              style={styles.input}
              placeholder={'Reason for repair'}
              placeholderTextColor={COLORS.stroke}
            />

            <TextInput
              style={styles.textarea}
              placeholder={'Type the note here...'}
              placeholderTextColor={COLORS.stroke}
              numberOfLines={4}
              multiline={true}
              textAlignVertical="top"
            />

            <CustomButton
              text={'Confirm Booking'}
              style={{marginVertical: 40}}
              onPress={() => {
                if (time) {
                  navigation.navigate('Book', {
                    date: formatDate(selectedDay),
                    time: time,
                  });
                  handleClosePress();
                } else {
                  Alert.alert('Please, choose the time');
                }
              }}
            />
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
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
  calendar: {
    width: '100%',
    backgroundColor: COLORS.homeBackground,
  },
  bottomTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.stroke,
    borderRadius: 12,
    paddingLeft: 20,
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    color: COLORS.main,
    fontSize: 16,
  },
  textarea: {
    height: 100,
    borderWidth: 1,
    borderColor: COLORS.stroke,
    borderRadius: 12,
    paddingLeft: 20,
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    color: COLORS.main,
    fontSize: 16,
    paddingTop: 10,
  },
});
