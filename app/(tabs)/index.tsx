import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
import Footer from './footer';

const TeamScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="user" size={24} color="black" />
        <Text style={styles.headerTitle}>Team</Text>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="gray" style={styles.iconLeft} />
        <TextInput style={styles.searchInput} placeholder="search" />
        <FontAwesome name="sliders-h" size={18} color="gray" style={styles.iconRight} />
      </View>

      {/* Team Cards */}
      <ScrollView style={styles.teamContainer}>
        <View style={styles.teamCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <FontAwesome name="users" size={24} color="black" />
              <Text style={styles.teamTitle}>Time de Vendas</Text>
            </View>
            <FontAwesome name="ellipsis-v" size={24} color="black" />
          </View>
          <View style={styles.teamList}>
            <Text>Canal Geral</Text>
            <Text>Vendas Tipo 1</Text>
            <Text>Vendas Tipo 2</Text>
          </View>
        </View>

        <View style={styles.teamCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <FontAwesome name="users" size={24} color="black" />
              <Text style={styles.teamTitle}>Time B</Text>
            </View>
            <FontAwesome name="ellipsis-v" size={24} color="black" />
          </View>
          <View style={styles.teamList}>
            <Text>Geral</Text>
          </View>
        </View>

        <View style={styles.teamCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <FontAwesome name="users" size={24} color="black" />
              <Text style={styles.teamTitle}>Marketing</Text>
            </View>
            <FontAwesome name="ellipsis-v" size={24} color="black" />
          </View>
          <View style={styles.teamList}>
            <Text>Geral</Text>
            <Text>Produto 1</Text>
            <Text>Produto 2</Text>
          </View>
          
        </View>
      </ScrollView>

      {/* Footer */}
      <TouchableOpacity style={styles.addButton}>
          <FontAwesome name="plus" size={24} color="black" />
        </TouchableOpacity>

      <Footer></Footer>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 50,
    margin: 16,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 40,
  },
  iconLeft: {
    position: 'absolute',
    left: 12,
  },
  iconRight: {
    position: 'absolute',
    right: 12,
  },
  teamContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  teamCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  teamList: {
    marginTop: 8,
    color: '#6B7280',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#D1D5DB',
    padding: 10,
    borderRadius: 50,
    marginLeft: "80%", 
    marginRight: "5%",
    alignItems: "center" 

},
});

export default TeamScreen;
