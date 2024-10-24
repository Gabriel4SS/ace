import React from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Footer from './footer';
import { useRouter } from 'expo-router';

interface Message {
  icon?: string;
  name: string;
  message: string;
  isImage?: boolean;
}

const messages: Message[] = [
  {
    icon: "user",
    name: "José da Silva",
    message: "exemplo de mensagem"
  },
  {
    icon: "users",
    name: "Time A",
    message: "João: exemplo de mensagem"
  },
  {
    icon: "users",
    name: "Time B",
    message: "Marcos: exemplo de mensagem"
  },
  {
    icon: "tasks",
    name: "Atividade X",
    message: "A atividade X deve ser entregue até a ..."
  },
  {
    isImage: true,
    name: "Vanessa Andrade",
    message: "exemplo de mensagem",
  }
];

const MessagesScreen: React.FC = () => {
  const router = useRouter(); // Definir dentro do componente

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/perfil")}>
          <FontAwesome name="user-circle" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={18} color="gray" style={styles.icon} />
        <TextInput style={styles.searchInput} placeholder="search" />
        <FontAwesome name="sliders-h" size={18} color="gray" />
      </View>

      {/* Messages */}
      <ScrollView style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.message}>
            {msg.isImage ? (
              <Image
                source={{ uri: 'https://placehold.co/40x40' }}
                style={styles.profileImage}
              />
            ) : (
              <FontAwesome name={msg.icon} size={24} style={styles.icon} />
            )}
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>{msg.name}</Text>
              <Text style={styles.messageText}>{msg.message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <Footer />
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
    padding: 16,
    backgroundColor: '#D1D5DB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  messageContainer: {
    flex: 1,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontWeight: '600',
  },
  messageText: {
    color: 'gray',
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
  },
});

export default MessagesScreen;
