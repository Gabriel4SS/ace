import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => router.replace("/notification")}
      >
        <FontAwesome name="bell" size={24} color="black" />
        <Text style={styles.footerText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => router.replace("/")} 
      >
        <FontAwesome name="users" size={24} color="black" />
        <Text style={styles.footerText}>Team</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => router.replace("/caixa_mensagens")} 
      >
        <FontAwesome name="envelope" size={24} color="black" />
        <Text style={styles.footerText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => router.replace("/calendario")}
      >
        <FontAwesome name="calendar" size={24} color="black" />
        <Text style={styles.footerText}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => router.replace("/atividades")}
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
