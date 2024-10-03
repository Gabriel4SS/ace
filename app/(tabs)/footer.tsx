import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importe o hook

const Footer: React.FC = () => {
  const navigation = useNavigation(); // Utilize o hook aqui

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('notification')} // Substitua com o nome correto da tela
      >
        <FontAwesome name="bell" size={24} color="black" />
        <Text style={styles.footerText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('team')} // Substitua com o nome correto da tela
      >
        <FontAwesome name="users" size={24} color="black" />
        <Text style={styles.footerText}>Team</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('messages')} // Substitua com o nome correto da tela
      >
        <FontAwesome name="envelope" size={24} color="black" />
        <Text style={styles.footerText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('calendar')} // Substitua com o nome correto da tela
      >
        <FontAwesome name="calendar" size={24} color="black" />
        <Text style={styles.footerText}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('activities')} // Substitua com o nome correto da tela
      >
        <FontAwesome name="tasks" size={24} color="black" />
        <Text style={styles.footerText}>Activities</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Footer;
