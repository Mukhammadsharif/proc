import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLORS, dimension, FONTS} from '../helpers/colors';
import {routes} from '../helpers/data';
import RouteItem from '../components/RouteItem';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routes</Text>

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}>
        {routes.map((route, index) => (
          <RouteItem item={route} key={index} />
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
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 40,
    fontFamily: FONTS.heavy,
    fontWeight: '700',
  },
  flex: {
    flex: 1,
  },
  main: {
    paddingBottom: 200,
  },
});
