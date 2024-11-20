import {Dimensions} from 'react-native';

export const COLORS = {
  black: '#1A1726',
  white: '#ffffff',
  placeholder: '#C2C2C2',
  main: '#31406F',
  homeBackground: '#F0F0F0',
  stroke: '#A7AEC3',
  detailFont: '#8F9BB3',
  ratingBorder: '#F5F5F5',
};

export const FONTS = {
  black: 'SF-Pro-Display-Black',
  bold: 'SF-Pro-Display-Bold',
  heavy: 'SF-Pro-Display-Heavy',
  light: 'SF-Pro-Display-Light',
  medium: 'SF-Pro-Display-Medium',
  regular: 'SF-Pro-Display-Regular',
};

export const dimension = Dimensions.get('window');

export const tabIcons = {
  home: require('../assets/tab_icons/home_tab_icon.png'),
  homeInactive: require('../assets/tab_icons/home_tab_inactive_icon.png'),
  camera: require('../assets/tab_icons/camera_tab_icon.png'),
  cameraInactive: require('../assets/tab_icons/camera_tab_inactive_icon.png'),
  map: require('../assets/tab_icons/map_tab_icon.png'),
  mapInactive: require('../assets/tab_icons/map_tab_inactive_icon.png'),
  calendar: require('../assets/tab_icons/calendar_tab_icon.png'),
  calendarInactive: require('../assets/tab_icons/calendar_tab_inactive_icon.png'),
};
