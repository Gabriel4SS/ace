// App.js
import React from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="user-circle" size={24} color="black" />
        <Text style={styles.headerText}>Activities</Text>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>

      {/* Search Input */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={16} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity>
          <Text style={styles.activeButton}>Pendentes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactiveButton}>Em atraso</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactiveButton}>Concluídas</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable List */}
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.dateText}>11 de jun. Terça-feira</Text>
          <View style={styles.activity}>
            <Text style={styles.activityTitle}>Reunião - Estratégia de vendas</Text>
            <Text>Brainstorm estratégia vendas do produto X</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.dateText}>17 de jun. Segunda-feira</Text>
          <View style={styles.activity}>
            <Text style={styles.activityTitle}>Reunião - Vendas produto X</Text>
            <Text>Apresentação para o CEO os dados sobre as vendas do produto X, e novas tratativas após feedback do mercado</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.dateText}>20 de jun. Quinta-feira</Text>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <FontAwesome name="bell" size={24} color="gray" />
        <FontAwesome name="users" size={24} color="gray" />
        <FontAwesome name="comment-dots" size={24} color="gray" />
        <FontAwesome name="calendar-alt" size={24} color="gray" />
        <TouchableOpacity style={styles.plusButton}>
          <FontAwesome name="plus-circle" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    backgroundColor: '#E5E7EB',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    margin: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    borderColor: '#E5E7EB',
    padding: 8,
    borderRadius: 4,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E5E7EB',
    paddingVertical: 8,
  },
  activeButton: {
    color: 'black',
    fontWeight: 'bold',
  },
  inactiveButton: {
    color: 'gray',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  dateText: {
    color: 'gray',
  },
  activity: {
    backgroundColor: '#E5E7EB',
    padding: 16,
    borderRadius: 8,
  },
  activityTitle: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
  },
  plusButton: {
    position: 'relative',
  },
});
