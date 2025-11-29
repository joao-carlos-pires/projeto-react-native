import { Linking, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, children }: Props) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(href)}>
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#0a7ea4',
    textDecorationLine: 'underline',
  },
});
