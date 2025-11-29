import { View, StyleSheet, ViewProps } from 'react-native';

export function ThemedView({ style, ...props }: ViewProps) {
  return <View style={[styles.container, style]} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
