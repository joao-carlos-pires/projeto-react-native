import { Link } from 'expo-router';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { useCallback, useRef, useState } from 'react';

import { portfolioStyles } from '@/styles/portfolioStyles';

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const [projectsOffset, setProjectsOffset] = useState(0);

  const scrollToProjects = () => {
    scrollRef.current?.scrollTo({ y: projectsOffset, animated: true });
  };

  const openAgenda = useCallback(() => {
    Linking.openURL('https://site-agenda-p-web.vercel.app/').catch(() => null);
  }, []);

  const openGithub = useCallback(() => {
    Linking.openURL('https://github.com/joao-carlos-pires').catch(() => null);
  }, []);

  return (
    <ScrollView
      ref={scrollRef}
      style={portfolioStyles.screen}
      contentContainerStyle={portfolioStyles.container}
    >
      <View style={portfolioStyles.top}>
        <Text style={portfolioStyles.title}>
          Olá, eu sou <Text style={portfolioStyles.highlight}>João Carlos</Text>
        </Text>
        <Text style={portfolioStyles.subtitle}>
          Estudante de Ciência da Computação e entusiasta da área de tecnologia
        </Text>
        <View style={portfolioStyles.actions}>
          <Pressable style={[portfolioStyles.primaryButton, portfolioStyles.actionSpacing]} onPress={scrollToProjects}>
            <Text style={portfolioStyles.primaryText}>Ver projetos</Text>
          </Pressable>
          <Link href="/forca" asChild>
            <Pressable style={[portfolioStyles.secondaryButton, portfolioStyles.actionSpacing]}>
              <Text style={portfolioStyles.secondaryText}>Jogar Forca</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={portfolioStyles.section}>
        <Text style={portfolioStyles.sectionTitle}>Sobre mim</Text>
        <Text style={portfolioStyles.sectionText}>
          No momento, estou estudando tecnologias focadas em frontend como JS/React/Next, HTML e CSS.
        </Text>
      </View>

      <View
        style={portfolioStyles.section}
        onLayout={(event) => setProjectsOffset(event.nativeEvent.layout.y)}
      >
        <Text style={portfolioStyles.sectionTitle}>Projetos em destaque</Text>
        <View style={portfolioStyles.projectsGrid}>
          <View style={portfolioStyles.projectCard}>
            <Text style={portfolioStyles.projectTitle}>Jogo da Forca (React Native)</Text>
            <Text style={portfolioStyles.projectText}>
              Implementação completa com teclado virtual e estados de vitória/derrota.
            </Text>
            <Link href="/forca" asChild>
              <Pressable>
                <Text style={portfolioStyles.projectLink}>Abrir projeto</Text>
              </Pressable>
            </Link>
          </View>

          <View style={portfolioStyles.projectCard}>
            <Text style={portfolioStyles.projectTitle}>Agenda Web</Text>
            <Text style={portfolioStyles.projectText}>
              To-dos por data, integração com API e layout responsivo.
            </Text>
            <Pressable onPress={openAgenda}>
              <Text style={portfolioStyles.projectLink}>Saiba mais</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={portfolioStyles.section}>
        <Text style={portfolioStyles.sectionTitle}>Contato</Text>
        <View style={portfolioStyles.contactList}>
          <Pressable style={portfolioStyles.contactItem} onPress={openGithub}>
            <Text style={portfolioStyles.contactLink}>GitHub</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
