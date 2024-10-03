import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from './notification';
import TeamScreen from './index'; 
import MessagesScreen from './mensagens';
import CalendarScreen from './calendario'; 
import ActivitiesScreen from './atividades'; 

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/">
      <Stack.Screen name="notification" component={NotificationsScreen} />
      <Stack.Screen name="team" component={TeamScreen} />
      <Stack.Screen name="messages" component={MessagesScreen} />
      <Stack.Screen name="calendar" component={CalendarScreen} />
      <Stack.Screen name="activities" component={ActivitiesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
