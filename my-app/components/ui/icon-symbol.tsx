import { Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
  size?: number;
  color?: string;
  style?: any;
};

export function IconSymbol({ name, size = 24, color = '#000', style }: Props) {
  // Simplified icon component - you can replace with a proper icon library
  return <Text style={[styles.icon, { fontSize: size, color }, style]}>●</Text>;
}

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
  },
});
