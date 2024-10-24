import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

interface UsuarioForm {
  nome: string;
  email: string;
  senha: string;
  setor: string;
  cargo: string;
  telefone: string;
}

const CadastroUsuarioScreen: React.FC = () => {
  const router = useRouter();    
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [setor, setSetor] = useState<string>('');
  const [cargo, setCargo] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');

  const handleCadastro = async () => {
    const usuario: UsuarioForm = { nome, email, senha, setor, cargo, telefone };

    try {
      await axios.post('http://localhost:8080/usuarios', usuario);
      router.replace("/login");
    } catch (error: any) {
      Alert.alert('Erro ao cadastrar', error.response ? error.response.data : 'Erro desconhecido');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <Text>Setor:</Text>
      <TextInput
        style={styles.input}
        value={setor}
        onChangeText={setSetor}
        placeholder="Digite seu setor"
      />
      <Text>Cargo:</Text>
      <TextInput
        style={styles.input}
        value={cargo}
        onChangeText={setCargo}
        placeholder="Digite seu cargo"
      />
      <Text>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite seu telefone"
        keyboardType="phone-pad"
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default CadastroUsuarioScreen;