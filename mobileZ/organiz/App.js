import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './Styles';

export default function App() {

    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [plano, setPlano] = useState('');

    const handleCadastro = () => {
        if (senha != confirmarSenha) {
            alert("Erro: As senhas não coincidem!")
            return;
        }
        console.log("Nome Completo: ", nome);
        console.log("Data de Nascimento: ", dataNascimento);
        console.log("E-mail: ", email);
        console.log("Senha: ", senha);
        console.log("Confirmar Senha: ", confirmarSenha);
        console.log("Plano: ", plano);
    }

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));

    useEffect(() => {
        Animated.spring(offset.y, {
            toValue: 0,
            speed: 5,
            bounciness: 20,
            useNativeDriver: true,
        }).start();
    }, [])
    return (

        <ScrollView style={styles.background} behavior='padding'>
            <View style={styles.containerMenu}>
                <Image style={styles.logo} resizeMode='contain' source={require('./assets/img/logo2.png')}></Image>
            </View>
            <Text style={styles.cad}>Cadastro</Text>
            <Animated.View style={[styles.containerCad, { transform: [{ translateY: offset.y }] }]}>
                <TextInput style={styles.inputs} placeholder='Nome Completo'
                    value={nome} onChangeText={setNome}
                />
                <TextInput style={styles.inputs} placeholder='Data de Nascimento'
                    value={dataNascimento} onChangeText={setDataNascimento} />
                <TextInput style={styles.inputs} placeholder='E-mail'
                    value={email} onChangeText={setEmail} />
                <TextInput style={styles.inputs} placeholder='Senha'
                    value={senha} onChangeText={setSenha} />
                <TextInput style={styles.inputs} placeholder='Confirmar senha'
                    value={confirmarSenha} onChangeText={setConfirmarSenha} />
                <TextInput style={styles.inputs} placeholder='Selecione o plano'
                    value={plano} onChangeText={setPlano} />

                <TouchableOpacity style={styles.btnSubmit} onPress={handleCadastro}>
                    <Text style={styles.submitTxt}>Criar cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.submitTxt}>Voltar ao Login</Text>
                </TouchableOpacity>
            </Animated.View>
            <StatusBar style="auto" />

        </ScrollView >
    );
}