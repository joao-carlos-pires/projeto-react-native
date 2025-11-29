import { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Collapsible({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{isOpen ? '−' : '+'}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 12,
  },
});
