import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS, dimension} from '../helpers/colors';
import ChevronLeft from '../assets/icons/chevron_left.png';
import {useNavigation} from '@react-navigation/native';

export default function Rating({route}) {
  const navigation = useNavigation();
  const {scores} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ChevronLeft} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{scores?.category}</Text>
        <View />
      </View>

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}>
        {scores?.items?.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.row}>
              <View style={styles.side}>
                <Text style={styles.rowTitle}>Rank</Text>
                <View style={styles.rankContainer}>
                  <Text style={styles.rank}>{item?.rank}</Text>
                </View>
              </View>

              <View style={styles.center}>
                <Text style={styles.rowTitle}>Name</Text>
                <Text style={styles.name}>{item?.name}</Text>
              </View>

              <View style={styles.side}>
                <Text style={styles.rowTitle}>Time</Text>
                <View
                  style={
                    index > 2 ? styles.timeContainerLose : styles.timeContainer
                  }>
                  <Text style={index > 2 ? styles.timeLose : styles.time}>
                    {item?.time} min
                  </Text>
                </View>
              </View>
            </View>
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
  },
  flex: {
    flex: 1,
  },
  main: {
    paddingBottom: 100,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: 20,
    marginTop: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  side: {
    width: '25%',
  },
  center: {
    width: '50%',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.ratingBorder,
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
    width: '90%',
    alignSelf: 'center',
  },
  time: {
    textAlign: 'center',
    color: '#1C8912',
    fontWeight: '700',
    fontSize: 18,
  },
  timeContainerLose: {
    backgroundColor: '#FFD2D2',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  timeLose: {
    textAlign: 'center',
    color: '#E01E1E',
    fontWeight: '700',
    fontSize: 18,
  },
});
