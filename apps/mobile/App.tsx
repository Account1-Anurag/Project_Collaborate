import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>SkillX</Text>
        <Text style={styles.subtitle}>Build Real Projects. Collaborate. Learn.</Text>
        <View style={styles.buttons}>
          <Button label="Browse Projects" />
          <Button label="Post a Project" accent />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Featured Projects</Text>
          <View style={{ height: 8 }} />
          <Text>• Open Source Dashboard (Next.js, Tailwind, TS)</Text>
          <Text>• AI Study Buddy (Python, FastAPI, OpenAI)</Text>
          <Text>• Habit Tracker (React Native, Expo)</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.card}><Text>Profile</Text></View>
          <View style={styles.card}><Text>Matches</Text></View>
          <View style={styles.card}><Text>Chat</Text></View>
          <View style={styles.card}><Text>Admin</Text></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Button({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <TouchableOpacity style={[styles.btn, accent ? styles.btnAccent : styles.btnPrimary]}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24 },
  title: { fontSize: 28, fontWeight: '700', color: '#2563eb' },
  subtitle: { marginTop: 8, fontSize: 16, color: '#374151' },
  buttons: { flexDirection: 'row', gap: 12, marginTop: 16 },
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8 },
  btnPrimary: { backgroundColor: '#2563eb' },
  btnAccent: { backgroundColor: '#f97316' },
  btnText: { color: '#fff', fontWeight: '600' },
  card: { borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: 16, backgroundColor: '#fff' },
  cardTitle: { fontWeight: '600', fontSize: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 16 },
});