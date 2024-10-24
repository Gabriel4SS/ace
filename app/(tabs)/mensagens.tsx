import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Footer from './footer';

const App = () => {
    // Simulando os dados recebidos do backend
    const userData = {
        profilePicture: "https://placehold.co/40x40",
        name: "Vanessa Andrade",
        messages: [
            { type: "sent", text: "te enviei o arquivo pedido na reunião" },
            { type: "sent", text: "arquivo.xml", file: true },
            { type: "received", text: "pô tá uma merda isso aí hein" },
            { type: "received", text: "faz de novo essa atividade e me manda até o fim do dia" }
        ]
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <FontAwesome name="user-circle" size={24} color="black" />
                <Text style={styles.headerTitle}>Messages</Text>
                <FontAwesome name="ellipsis-v" size={24} color="black" />
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <FontAwesome name="search" size={20} color="gray" />
                <TextInput style={styles.searchInput} placeholder="search" />
            </View>

            {/* Message Section */}
            <ScrollView style={styles.messageContainer}>
                <View style={styles.userProfile}>
                    <Image source={{ uri: userData.profilePicture }} style={styles.profileImage} />
                    <Text style={styles.userName}>{userData.name}</Text>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="phone" size={20} color="black" />
                        <FontAwesome name="info-circle" size={20} color="black" style={styles.iconSpacing} />
                    </View>
                </View>

                {userData.messages.map((message, index) => (
                    <View key={index} style={styles.messageWrapper}>
                        {message.type === "sent" ? (
                            <View style={[styles.messageBubble, styles.sentMessage]}>
                            {message.file ? <FontAwesome name="file" size={16} color="black" style={styles.iconSpacing} /> : null}
                            <Text style={styles.messageText}>{message.text}</Text>
                            {message.file ? <FontAwesome name="download" size={16} color="black" style={styles.iconSpacing} /> : null}
                        </View>
                        
                        ) : (
                            <View style={[styles.messageBubble, styles.receivedMessage]}>
                                <Text style={styles.messageText}>{message.text}</Text>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>

            {/* Footer */}
            <Footer/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 5,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    messageText: {
        fontSize: 16,
        color: '#000', 
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e2e8f0',
        padding: 10,
        marginHorizontal: 16,
        marginVertical: 10,
        borderRadius: 25,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    messageContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    userProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    iconSpacing: {
        marginHorizontal: 5
    },
    messageWrapper: {
        marginBottom: 10,
    },
    messageBubble: {
        padding: 12,
        borderRadius: 20,
        maxWidth: '80%',
        flexDirection: 'row',  
        alignItems: 'center',  
    },
    
    sentMessage: {
        backgroundColor: '#3b82f6',
        alignSelf: 'flex-end',
        color: 'black'
    },
    receivedMessage: {
        backgroundColor: '#e5e7eb',
        alignSelf: 'flex-start',
        color: 'black'
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 5,
    },
});

export default App;
