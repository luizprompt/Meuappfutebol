import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  // 📌 DADOS FALSOS (MOCK): Imagine que o "Garçom" (API) trouxe isso do seu MySQL!
  // Isso virá das suas tabelas USERS e USER_STATS
  const userProfile = {
    name: "Luiz Miguel",
    level: 82, // Seu "Overall" calculado
    position: "Meio-Campo",
    photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // Avatar genérico
    stats: {
      goals: 14,
      assists: 8,
      matches: 22
    }
  };

  // Isso virá das tabelas MATCH_PARTICIPANTS e MATCHES
  const matchHistory = [
    { id: 1, date: "12/04", location: "Arena Sul", result: "Vitória (5x3)" },
    { id: 2, date: "05/04", location: "Society Central", result: "Empate (2x2)" },
    { id: 3, date: "28/03", location: "Quadra do Parque", result: "Derrota (1x2)" },
  ];

  return (
    <ScrollView style={styles.container}>
      
      {/* 1. SEÇÃO DA CARTINHA (Foto e Nome) */}
      <View style={styles.cardSection}>
        <Image source={{ uri: userProfile.photo }} style={styles.avatar} />
        <Text style={styles.playerName}>{userProfile.name}</Text>
        <Text style={styles.playerPosition}>{userProfile.position}</Text>
        
        <View style={styles.overallBadge}>
          <Text style={styles.overallText}>{userProfile.level}</Text>
          <Text style={styles.overallLabel}>OVR</Text>
        </View>
      </View>

      {/* 2. SEÇÃO DE ESTATÍSTICAS (Gols e Assistências) */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userProfile.stats.matches}</Text>
          <Text style={styles.statLabel}>Jogos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userProfile.stats.goals}</Text>
          <Text style={styles.statLabel}>Gols</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userProfile.stats.assists}</Text>
          <Text style={styles.statLabel}>Assists</Text>
        </View>
      </View>

      {/* 3. HISTÓRICO DE PARTIDAS (A "Timeline") */}
      <View style={styles.historySection}>
        <Text style={styles.sectionTitle}>Últimas Partidas</Text>
        
        {matchHistory.map((match) => (
          <TouchableOpacity key={match.id} style={styles.historyItem}>
            <View>
              <Text style={styles.historyLocation}>{match.location}</Text>
              <Text style={styles.historyDate}>{match.date}</Text>
            </View>
            <Text style={styles.historyResult}>{match.result}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

// 🎨 ESTILOS (O CSS do React Native)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8', // Fundo cinza bem claro
  },
  cardSection: {
    backgroundColor: '#1E293B', // Azul bem escuro, pegada "Gamer"
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#10B981', // Borda verde vibrante
    marginBottom: 15,
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  playerPosition: {
    fontSize: 16,
    color: '#94A3B8',
    marginBottom: 10,
  },
  overallBadge: {
    backgroundColor: '#10B981', // Verde estilo "em boa fase"
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  overallText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  overallLabel: {
    fontSize: 10,
    color: '#E0F2FE',
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  statBox: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
  },
  historySection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 15,
  },
  historyItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981', // Detalhe verde
  },
  historyLocation: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
  },
  historyDate: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 4,
  },
  historyResult: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
  },
});