import { StyleSheet } from 'react-native';

export const pageStyles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 80,
    gap: 64,
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontFamily: 'System',
  },
  main: {
    flexDirection: 'column',
    gap: 32,
  },
  list: {
    fontSize: 14,
    lineHeight: 24,
  },
  ctas: {
    flexDirection: 'row',
    gap: 16,
  },
  primaryAction: {
    borderRadius: 128,
    height: 48,
    paddingHorizontal: 20,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryAction: {
    borderRadius: 128,
    height: 48,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
