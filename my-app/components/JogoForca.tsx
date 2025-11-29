import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

import CartaoDerrota from '@/components/CartaoDerrota';
import DesenhoForca from '@/components/DesenhoForca';
import { forcaStyles } from '@/styles/forcaStyles';
import { PALAVRAS } from '@/utils/palavras';

const MAX_ERROS = 6;
const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ'.split('');

export default function JogoForca() {
  const [segredo, setSegredo] = useState('');
  const [usadas, setUsadas] = useState<Set<string>>(new Set());
  const [erradas, setErradas] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'jogando' | 'venceu' | 'perdeu'>('jogando');
  const [entrada, setEntrada] = useState('');
  const { width } = useWindowDimensions();

  const sortearPalavra = useCallback(() => {
    const palavra = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)].toUpperCase();
    setSegredo(palavra);
    setUsadas(new Set());
    setErradas(new Set());
    setStatus('jogando');
    setEntrada('');
  }, []);

  useEffect(() => {
    sortearPalavra();
  }, [sortearPalavra]);

  const segredoNormalizado = useMemo(() => segredo.toUpperCase(), [segredo]);

  const palavraMascarada = useMemo(() => {
    return segredoNormalizado
      .split('')
      .map((ch) => (ch === ' ' ? ' ' : usadas.has(ch) ? ch : '_'))
      .join(' ');
  }, [segredoNormalizado, usadas]);

  const tentarLetra = useCallback(
    (entradaBruta: string) => {
      if (status !== 'jogando' || !entradaBruta) {
        return;
      }
      const letra = entradaBruta.toUpperCase().replace(/[^A-ZÇ]/g, '');
      if (!letra || usadas.has(letra)) {
        return;
      }

      setUsadas((prev) => {
        const next = new Set(prev);
        next.add(letra);
        return next;
      });

      if (!segredoNormalizado.includes(letra)) {
        setErradas((prev) => {
          const next = new Set(prev);
          next.add(letra);
          return next;
        });
      }
    },
    [segredoNormalizado, status, usadas],
  );

  useEffect(() => {
    if (!segredoNormalizado) return;
    const revelouTudo = segredoNormalizado
      .split('')
      .every((ch) => ch === ' ' || usadas.has(ch));
    if (revelouTudo) {
      setStatus('venceu');
    } else if (erradas.size >= MAX_ERROS) {
      setStatus('perdeu');
    }
  }, [segredoNormalizado, usadas, erradas]);

  const enviarLetra = () => {
    if (!entrada) return;
    tentarLetra(entrada.slice(0, 1));
    setEntrada('');
  };

  const tentativasRestantes = MAX_ERROS - erradas.size;
  const jogoAtivo = status === 'jogando';
  const isWideStage = width >= 900;
  const isWideAttempts = width >= 600;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, width: '100%' }}
    >
      <ScrollView contentContainerStyle={forcaStyles.scrollContent}>
        <View style={forcaStyles.card}>
          <View style={forcaStyles.header}>
            <Text style={forcaStyles.headerTitle}>Jogo da Forca</Text>
            <Text style={forcaStyles.subtitle}>
              Adivinhe a palavra antes que o boneco seja completo!
            </Text>
          </View>

          <View style={[forcaStyles.stage, isWideStage && forcaStyles.stageWide]}>
            <DesenhoForca erros={erradas.size} />
            <View style={forcaStyles.infoPanel}>
              <View>
                <Text style={forcaStyles.label}>Tentativas restantes</Text>
                <Text style={forcaStyles.pill}>{tentativasRestantes}</Text>
              </View>
              <View>
                <Text style={forcaStyles.label}>Palavra</Text>
                <Text style={forcaStyles.word}>{palavraMascarada}</Text>
              </View>
            </View>
          </View>

          <View style={forcaStyles.inputRow}>
            <TextInput
              value={entrada}
              onChangeText={setEntrada}
              style={forcaStyles.textInput}
              placeholder="Digite uma letra"
              maxLength={1}
              autoCapitalize="characters"
              autoComplete="off"
              autoCorrect={false}
              editable={jogoAtivo}
            />
            <Pressable
              style={forcaStyles.primaryButton}
              disabled={!entrada || !jogoAtivo}
              onPress={enviarLetra}
            >
              <Text style={forcaStyles.primaryButtonText}>Tentar</Text>
            </Pressable>
            <Pressable style={forcaStyles.secondaryButton} onPress={sortearPalavra}>
              <Text style={forcaStyles.secondaryButtonText}>Reiniciar</Text>
            </Pressable>
          </View>

          <Teclado onPressionar={tentarLetra} usadas={usadas} desativado={!jogoAtivo} />

          <View style={[forcaStyles.attempts, isWideAttempts && forcaStyles.attemptsWide]}>
            <View>
              <Text style={forcaStyles.label}>Corretas</Text>
              <View style={forcaStyles.chipsRow}>
                {Array.from(usadas)
                  .filter((letra) => segredoNormalizado.includes(letra))
                  .map((letra) => (
                    <Text key={`c-${letra}`} style={[forcaStyles.chip, forcaStyles.chipGreen]}>
                      {letra}
                    </Text>
                  ))}
                {Array.from(usadas).filter((l) => segredoNormalizado.includes(l)).length === 0 && (
                  <Text style={forcaStyles.chipMuted}>—</Text>
                )}
              </View>
            </View>
            <View>
              <Text style={forcaStyles.label}>Erradas</Text>
              <View style={forcaStyles.chipsRow}>
                {Array.from(erradas).map((letra) => (
                  <Text key={`w-${letra}`} style={[forcaStyles.chip, forcaStyles.chipRed]}>
                    {letra}
                  </Text>
                ))}
                {erradas.size === 0 && <Text style={forcaStyles.chipMuted}>—</Text>}
              </View>
            </View>
          </View>

          {status !== 'jogando' && (
            <View
              style={[
                forcaStyles.result,
                status === 'venceu' ? forcaStyles.victory : forcaStyles.defeat,
              ]}
            >
              <Text style={[forcaStyles.resultTitle, { color: status === 'venceu' ? '#0a577a' : '#8f1a1a' }]}>
                {status === 'venceu' ? 'Parabéns!' : 'Fim de jogo'}
              </Text>
              <Text style={[forcaStyles.resultText, { color: status === 'venceu' ? '#0a577a' : '#8f1a1a' }]}>
                {status === 'venceu' ? 'Você adivinhou: ' : 'A palavra era: '}
                <Text style={{ fontWeight: '700' }}>{segredo}</Text>
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <CartaoDerrota visivel={status === 'perdeu'} palavra={segredo} onReiniciar={sortearPalavra} />
    </KeyboardAvoidingView>
  );
}

type TecladoProps = {
  onPressionar: (letra: string) => void;
  usadas: Set<string>;
  desativado: boolean;
};

function Teclado({ onPressionar, usadas, desativado }: TecladoProps) {
  return (
    <View style={forcaStyles.keyboard}>
      {LETRAS.map((letra) => {
        const jaUsou = usadas.has(letra);
        const disabled = desativado || jaUsou;
        return (
          <Pressable
            key={letra}
            onPress={() => onPressionar(letra)}
            disabled={disabled}
            style={[forcaStyles.key, disabled && forcaStyles.keyDisabled]}
            accessibilityRole="button"
            accessibilityLabel={`Letra ${letra}`}
          >
            <Text style={[forcaStyles.keyText, disabled && forcaStyles.keyTextDisabled]}>{letra}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
