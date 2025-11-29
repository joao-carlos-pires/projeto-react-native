import { Modal, Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

import { derrotaStyles } from '@/styles/derrotaStyles';

type Props = {
  palavra: string;
  visivel: boolean;
  onReiniciar: () => void;
};

export default function CartaoDerrota({ palavra, visivel, onReiniciar }: Props) {
  return (
    <Modal visible={visivel} transparent animationType="fade" statusBarTranslucent>
      <View style={derrotaStyles.overlay}>
        <View style={derrotaStyles.card}>
          <View style={derrotaStyles.faceIcon} accessible={false}>
            <Svg width={120} height={120} viewBox="0 0 120 120">
              <Circle cx="60" cy="60" r="38" fill="none" stroke="#222" strokeWidth={5} />
              <Line x1="44" y1="48" x2="56" y2="60" stroke="#8f1a1a" strokeWidth={4} strokeLinecap="round" />
              <Line x1="56" y1="48" x2="44" y2="60" stroke="#8f1a1a" strokeWidth={4} strokeLinecap="round" />
              <Line x1="76" y1="48" x2="64" y2="60" stroke="#8f1a1a" strokeWidth={4} strokeLinecap="round" />
              <Line x1="64" y1="48" x2="76" y2="60" stroke="#8f1a1a" strokeWidth={4} strokeLinecap="round" />
              <Line x1="45" y1="80" x2="75" y2="80" stroke="#8f1a1a" strokeWidth={4} strokeLinecap="round" />
            </Svg>
          </View>

          <Text style={derrotaStyles.title}>Fim de jogo</Text>
          <Text style={derrotaStyles.text}>
            A palavra era: <Text style={{ fontWeight: '700' }}>{palavra}</Text>
          </Text>

          <Pressable style={derrotaStyles.button} onPress={onReiniciar}>
            <Text style={derrotaStyles.buttonText}>Jogar novamente</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
