import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View, Image} from 'react-native';
import {COLORS, tabIcons} from './helpers/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import RouteDetail from './screens/RouteDetail';
import CameraScreen from './screens/CameraScreen';
import CalendarScreen from './screens/CalendarScreen';
import Book from './screens/Book';
import Rating from './screens/Rating';
import Map from './screens/Map';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={TabScreen} name="TabScreen" />
        <Stack.Screen component={RouteDetail} name="RouteDetail" />
        <Stack.Screen component={Book} name="Book" />
        <Stack.Screen component={Rating} name="Rating" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 10,
          backgroundColor: COLORS.white,
          height: 90,
          paddingTop: 10,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        tabBarHideOnKeyboard: true,
        gestureEnabled: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? tabIcons.home : tabIcons.homeInactive}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View style={focused ? styles.label : styles.labelInactive} />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? tabIcons.map : tabIcons.mapInactive}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View style={focused ? styles.label : styles.labelInactive} />
          ),
        }}
      />

      <Tab.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? tabIcons.camera : tabIcons.cameraInactive}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View style={focused ? styles.label : styles.labelInactive} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? tabIcons.calendar : tabIcons.calendarInactive}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View style={focused ? styles.label : styles.labelInactive} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
    objectFit: 'contain',
    marginTop: 10,
  },
  label: {
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: COLORS.main,
    marginTop: 10,
  },
  labelInactive: {},
});
