import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, dimension} from '../helpers/colors';
import {scores} from '../helpers/data';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function Map() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trail Ratings</Text>

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}>
        {scores.map((score, index) => (
          <View style={styles.cardContainer} key={index}>
            <View key={index} style={styles.card}>
              <Text style={styles.category}> {score.category}</Text>

              <View style={styles.row}>
                <View style={styles.side}>
                  <Text style={styles.rowTitle}>Rank</Text>
                  <View style={styles.rankContainer}>
                    <Text style={styles.rank}>{score?.items[0]?.rank}</Text>
                  </View>
                </View>

                <View style={styles.center}>
                  <Text style={styles.rowTitle}>Name</Text>
                  <Text style={styles.name}>{score?.items[0]?.name}</Text>
                </View>

                <View style={styles.side}>
                  <Text style={styles.rowTitle}>Time</Text>
                  <View style={styles.timeContainer}>
                    <Text style={styles.time}>{score?.items[0]?.time} min</Text>
                  </View>
                </View>
              </View>
            </View>

            <CustomButton
              text={'View more'}
              style={{
                marginTop: 15,
                width: '70%',
                alignSelf: 'center',
              }}
              button={{backgroundColor: '#1C8912', height: 40}}
              onPress={() => navigation.navigate('Rating', {scores: score})}
            />
          </View>
        ))}
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
    paddingTop: 60,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  flex: {
    flex: 1,
  },
  main: {
    paddingBottom: 100,
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: COLORS.ratingBorder,
    paddingVertical: 15,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  side: {
    width: '30%',
  },
  center: {
    width: '40%',
  },
  rowTitle: {
    textAlign: 'center',
    marginBottom: 15,
    color: COLORS.stroke,
    fontSize: 16,
  },
  rankContainer: {
    width: 30,
    height: 35,
    backgroundColor: '#1C8912',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  rank: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 20,
  },
  name: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 17,
    marginTop: 5,
  },
  timeContainer: {
    backgroundColor: '#C8FFC3',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '70%',
    alignSelf: 'center',
  },
  time: {
    textAlign: 'center',
    color: '#1C8912',
    fontWeight: '700',
    fontSize: 18,
  },
});
