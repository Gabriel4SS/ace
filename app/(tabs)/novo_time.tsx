import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Picker, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Footer from './footer';
import { router } from 'expo-router';
import axios from 'axios';

const NewTeamScreen: React.FC = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async () => {
    if (!nome || !descricao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const formData = {
      // id: 1,  ID do usuário logado
      nome,
      descricao,
    };
    try {
      await axios.post('http://localhost:8080/grupos', formData);
      router.replace("/");
    } catch (error: any) {
      Alert.alert('Erro ao cadastrar', error.response ? error.response.data : 'Erro desconhecido');
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="user-circle" size={24} color="black" />
        <Text style={styles.headerTitle}>New Team</Text>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="gray" style={styles.icon} />
          <TextInput style={styles.searchInput} placeholder="search" />
        </View>

        {/* Form */}
        <ScrollView style={styles.formContainer} contentContainerStyle={styles.formContent}>
          <Text style={styles.formTitle}>Novo grupo</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Titulo do canal:</Text>
            <TextInput style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite o título" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Descrição:</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={descricao}
              onChangeText={setDescricao}
              placeholder="Digite a descrição"
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Adicionar responsáveis:</Text>
            <Picker style={styles.picker}>
              <Picker.Item label="Selecione o responsável" value="responsavel" />
            </Picker>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Adicionar membros:</Text>
            <Picker style={styles.picker}>
              <Picker.Item label="Nenhum membro selecionado" value="membro" />
            </Picker>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Concluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => router.navigate("/")}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#D1D5DB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    padding: 10,
    borderRadius: 50,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  formContainer: {
    marginTop: 16,
  },
  formContent: {
    paddingBottom: 20,
  },
  formTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#F9FAFB',
  },
  textArea: {
    height: 100,
    borderRadius: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 50,
    backgroundColor: '#F9FAFB',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#6B7280',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
  },
  cancelButton: {
    backgroundColor: '#F87171',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#D1D5DB',
  },
  footerIcon: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default NewTeamScreen;
