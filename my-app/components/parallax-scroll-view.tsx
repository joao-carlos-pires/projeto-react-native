import { ScrollView, View, StyleSheet } from 'react-native';

type Props = {
  headerBackgroundColor?: { light: string; dark: string };
  headerImage?: React.ReactNode;
  children: React.ReactNode;
};

export default function ParallaxScrollView({ headerBackgroundColor, headerImage, children }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {headerImage && <View style={styles.header}>{headerImage}</View>}
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
});
