import { StyleSheet } from 'react-native';

export const globalColors = {
  background: '#f4f7fb',
  foreground: '#171717',
};

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: globalColors.background,
  },
  text: {
    color: globalColors.foreground,
    fontFamily: 'System',
  },
});
