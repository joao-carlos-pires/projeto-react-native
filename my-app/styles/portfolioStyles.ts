import { StyleSheet } from 'react-native';

export const portfolioStyles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#f4f7fb',
  },
  container: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    maxWidth: 1080,
    width: '100%',
    alignSelf: 'center',
  },
  top: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  highlight: {
    color: '#1363d1',
  },
  subtitle: {
    color: '#556270',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 16,
    maxWidth: 720,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 16,
  },
  actionSpacing: {
    marginHorizontal: 6,
    marginVertical: 4,
  },
  primaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: '#1363d1',
  },
  primaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cfd8e3',
    backgroundColor: '#fff',
  },
  secondaryText: {
    color: '#1f2d3a',
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  sectionText: {
    color: '#566370',
    fontSize: 16,
    lineHeight: 22,
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  projectCard: {
    flexBasis: '100%',
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eef2f7',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  projectText: {
    color: '#566370',
    marginBottom: 12,
    fontSize: 15,
  },
  projectLink: {
    color: '#0b63ce',
    fontWeight: '700',
  },
  contactList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactItem: {
    marginRight: 18,
    marginBottom: 12,
  },
  contactLink: {
    color: '#0b63ce',
    fontSize: 16,
    fontWeight: '600',
  },
});
