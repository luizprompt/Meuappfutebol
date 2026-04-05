import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MapPin, Clock, DollarSign, Users, MessageSquare, ThumbsUp } from 'lucide-react-native';

const { width } = Dimensions.get('window');

// Dados fictícios do criador do jogo
const organizer = {
  name: 'Carlos Santos',
  photo: 'https://randomuser.me/api/portraits/men/32.jpg', // Foto de exemplo
  datetime: 'Postado hoje, 20:53' // Combina com seu print
};

// Imagens de exemplo da quadra
const courtImages = [
  'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=600', // Campo de society à noite
  'https://images.unsplash.com/photo-1563299796-17596ed6b017?q=80&w=600', // Outro campo
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* CARD DE JOGO #1 */}
      <View style={styles.card}>
        
        {/* CABEÇALHO DO ORGANIZADOR */}
        <View style={styles.organizerHeader}>
          <Image source={{ uri: organizer.photo }} style={styles.organizerPhoto} />
          <View>
            <Text style={styles.organizerName}>{organizer.name}</Text>
            <Text style={styles.postMeta}>{organizer.datetime}</Text>
          </View>
        </View>

        {/* IMAGEM DA QUADRA (SUBSTITUINDO O MAPA) */}
        {/* Usando o Dimensions para a imagem ficar do tamanho do card */}
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=600' }} 
           style={styles.courtImage}
            resizeMode="cover"
          
        />

        {/* TÍTULO E DETALHES (DARK MODE + VERDE) */}
        <View style={styles.cardContent}>
          <Text style={styles.gameTitle}>SOCIETY NA ARENA FUT</Text>
          
          <View style={styles.infoGrid}>
            <View style={styles.infoRow}>
              <MapPin color="#4caf50" size={18} />
              <Text style={styles.text}>Tatuapé, SP</Text>
            </View>
            <View style={styles.infoRow}>
              <DollarSign color="#4caf50" size={18} />
              <Text style={styles.text}>R$ 10,00</Text>
            </View>
          </View>
          
          <View style={styles.infoRow}>
            <Clock color="#4caf50" size={18} />
            <Text style={styles.text}>20:00 - 22:00 (Sábado)</Text>
          </View>

          {/* INDICADOR DE VAGAS (LOGICA DE "CONQUISTAS" DO STRAVA) */}
          <View style={styles.slotsContainer}>
            <Users color="#fff" size={20} />
            <Text style={styles.slotsText}>7 <Text style={{color: '#999'}}>de</Text> 12 JOGADORES CONFIRMADOS</Text>
          </View>

          {/* BOTÃO DE AÇÃO */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>QUERO JOGAR</Text>
          </TouchableOpacity>
        </View>

        {/* BARRA DE INTERAÇÃO (BEM PARECIDA COM O STRAVA) */}
        <View style={styles.interactionBar}>
          <TouchableOpacity style={styles.interactionButton}>
            <ThumbsUp color="#999" size={20} />
            <Text style={styles.interactionText}>Curtir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interactionButton}>
            <MessageSquare color="#999" size={20} />
            <Text style={styles.interactionText}>Comentar (3)</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CARD DE JOGO #2 (Para teste de rolagem) */}
      {/* Você pode copiar e colar o bloco acima para criar mais jogos */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' }, // Dark Mode
  
  // Card Estilo "Feed"
  card: { 
    backgroundColor: '#1e1e1e', // Card mais claro que o fundo
    marginVertical: 10, 
    borderRadius: 15, 
    elevation: 3, 
    overflow: 'hidden', // Importante para a imagem não sair
  },
  
  // Cabeçalho
  organizerHeader: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderColor: '#333' },
  organizerPhoto: { width: 45, height: 45, borderRadius: 22.5, marginRight: 12 },
  organizerName: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  postMeta: { fontSize: 12, color: '#999' },
  
  // Imagem
  courtImage: { width: '100%', height: width * 0.5 }, // 50% da largura da tela
  
  // Conteúdo
  cardContent: { padding: 15 },
  gameTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  
  infoGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  text: { marginLeft: 10, fontSize: 16, color: '#e0e0e0' },
  
  // Vagas (Dark Mode + Branco)
  slotsContainer: { marginTop: 15, paddingVertical: 12, borderTopWidth: 1, borderColor: '#333', flexDirection: 'row', alignItems: 'center' },
  slotsText: { marginLeft: 10, fontSize: 16, color: '#fff', fontWeight: 'bold' },
  
  // Botão Verde
  button: { backgroundColor: '#2e7d32', padding: 15, borderRadius: 10, marginTop: 15, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  
  // Interação (como o Strava)
  interactionBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 12, borderTopWidth: 1, borderColor: '#333', backgroundColor: '#1a1a1a' },
  interactionButton: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  interactionText: { color: '#999', fontSize: 14 }
});