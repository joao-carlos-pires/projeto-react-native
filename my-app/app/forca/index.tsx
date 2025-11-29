import { Stack } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';

import JogoForca from '@/components/JogoForca';

export default function ForcaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ title: 'Jogo da Forca' }} />
      <JogoForca />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f5f7',
  },
});
