import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Footer from './footer';
import { router } from 'expo-router';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="user-circle" size={24} color="black" />
        <Text style={styles.headerTitle}>Profile</Text>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="gray" style={styles.iconLeft} />
          <TextInput style={styles.searchInput} placeholder="search" />
        </View>

        {/* Personal Info */}
        <View style={styles.infoSection}>
          <FontAwesome name="user-circle" size={40} color="black" style={styles.profileIcon} />
          <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        </View>
        <View style={styles.infoContent}>
          <Text>Nome: João da Silva</Text>
          <Text>Email: joaozinho_zika@gmail.com</Text>
          <Text>Telefone: (12) 99999-9999</Text>
        </View>

        {/* Professional Info */}
        <Text style={styles.sectionTitle}>Dados Profissionais</Text>
        <View style={styles.infoContent}>
          <Text>Setor: A</Text>
          <Text>Cargo: Juninho</Text>
        </View>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text>Editar Informações</Text>
        </TouchableOpacity>
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}
          onPress={() => router.replace("/login")}
          >
          <Text>Sair</Text>
        </TouchableOpacity>
      </ScrollView>

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
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    padding: 12,
    borderRadius: 50,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 40,
  },
  iconLeft: {
    position: 'absolute',
    left: 12,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileIcon: {
    marginRight: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContent: {
    marginBottom: 16,
  },
  editButton: {
    padding: 12,
    backgroundColor: '#D1D5DB',
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 16,
  },
  logoutButton: {
    padding: 12,
    backgroundColor: '#6babd3',
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#D1D5DB',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default ProfileScreen;
