import { Text, StyleSheet, TextProps } from 'react-native';

type Props = TextProps & {
  type?: 'title' | 'defaultSemiBold' | 'default' | 'link';
};

export function ThemedText({ type = 'default', style, ...props }: Props) {
  const textStyle = [
    styles.default,
    type === 'title' && styles.title,
    type === 'defaultSemiBold' && styles.semiBold,
    type === 'link' && styles.link,
    style,
  ];

  return <Text style={textStyle} {...props} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  semiBold: {
    fontWeight: '600',
  },
  link: {
    color: '#0a7ea4',
    textDecorationLine: 'underline',
  },
});
