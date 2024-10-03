import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [markedDates, setMarkedDates] = useState({});

  // Função para buscar eventos do backend em Java
  const fetchEvents = async () => {
    try {
      const response = await fetch('https://api.seu-backend.com/events');
      const data = await response.json();

      const marked = {};
      data.forEach(event => {
        marked[event.date] = { marked: true, dotColor: event.color || 'blue' };
      });

      setMarkedDates(marked);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Buscar eventos ao montar o componente
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      <Calendar
        markedDates={markedDates} // Passando os dias marcados
        onDayPress={(day) => {
          console.log('Dia selecionado:', day);
        }}
        theme={{
          selectedDayBackgroundColor: 'green',
          todayTextColor: 'red',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default App;
