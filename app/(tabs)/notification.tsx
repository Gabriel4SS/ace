import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Footer from './footer';
import { useRouter } from 'expo-router';

const NotificationsScreen: React.FC = () => {
  const router = useRouter();

  // Simulação de dados recebidos do backend
  const notifications = [
    { id: 1, icon: 'user', title: 'José da Silva', message: 'Exemplo de mensagem' },
    { id: 2, icon: 'users', title: 'Time A', message: 'João: exemplo de mensagem' },
    { id: 3, icon: 'users', title: 'Time B', message: 'Marcos: exemplo de mensagem' },
    { id: 4, icon: 'tasks', title: 'Atividade X', message: 'A atividade x deve ser entregue até...' },
    { id: 5, image: 'https://placehold.co/32x32', title: 'Vanessa Andrade', message: 'Exemplo de mensagem' }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/perfil")}>
          <FontAwesome name="user-circle" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <FontAwesome name="ellipsis-v" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="gray" style={styles.iconLeft} />
        <TextInput style={styles.searchInput} placeholder="search" />
        <FontAwesome name="sliders-h" size={18} color="gray" style={styles.iconRight} />
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationsContainer}>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notificationItem}>
            {notification.image ? (
              <Image source={{ uri: notification.image }} style={styles.profileImage} />
            ) : (
              <FontAwesome name={notification.icon} size={20} color="black" />
            )}
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
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
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 50,
    marginHorizontal: 16,
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    marginLeft: 20,
  },
  iconLeft: {
    position: 'absolute',
    left: 12,
  },
  iconRight: {
    position: 'absolute',
    right: 12,
  },
  notificationsContainer: {
    flex: 1,
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  notificationText: {
    marginLeft: 12,
  },
  notificationTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationMessage: {
    color: '#6B7280',
    fontSize: 14,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#D1D5DB',
  },
});

export default NotificationsScreen;
