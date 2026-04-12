import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreateMatchScreen() {
  // Estados para capturar o que o usuário digita
  const [local, setLocal] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [maxJogadores, setMaxJogadores] = useState('10');

  const handleSave = () => {
    if (!local || !data || !horario) {
      Alert.alert("Atenção", "Preencha todos os campos para marcar a pelada!");
      return;
    }

    // Aqui é onde o "Garçom" (API) levaria os dados para a tabela MATCHES do MySQL
    Alert.alert(
      "Sucesso!", 
      `Partida em ${local} agendada para ${data} às ${horario}.`,
      [{ text: "Boa!" }]
    );
    
    // Limpar campos após "salvar"
    setLocal('');
    setData('');
    setHorario('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nova Partida</Text>
        <Text style={styles.subtitle}>Preencha os dados para convocar a galera</Text>
      </View>

      <View style={styles.form}>
        {/* Campo Local */}
        <Text style={styles.label}>Onde vai ser?</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={20} color="#94A3B8" />
          <TextInput 
            style={styles.input} 
            placeholder="Nome da Quadra ou Endereço"
            placeholderTextColor="#94A3B8"
            value={local}
            onChangeText={setLocal}
          />
        </View>

        {/* Campo Data */}
        <Text style={styles.label}>Qual o dia?</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={20} color="#94A3B8" />
          <TextInput 
            style={styles.input} 
            placeholder="Ex: 15/04/2026"
            placeholderTextColor="#94A3B8"
            value={data}
            onChangeText={setData}
          />
        </View>

        {/* Campo Horário */}
        <Text style={styles.label}>Que horas?</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="time-outline" size={20} color="#94A3B8" />
          <TextInput 
            style={styles.input} 
            placeholder="Ex: 19:00"
            placeholderTextColor="#94A3B8"
            value={horario}
            onChangeText={setHorario}
          />
        </View>

        {/* Campo Limite de Jogadores */}
        <Text style={styles.label}>Limite de Jogadores</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="people-outline" size={20} color="#94A3B8" />
          <TextInput 
            style={styles.input} 
            keyboardType="numeric"
            value={maxJogadores}
            onChangeText={setMaxJogadores}
          />
        </View>

        {/* Botão Salvar (O "C" do CRUD) */}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>AGENDAR PARTIDA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Fundo escuro
  },
  header: {
    padding: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 5,
  },
  form: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 500,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#1E293B',
  },
  button: {
    backgroundColor: '#10B981', // Verde sucesso
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 40,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});