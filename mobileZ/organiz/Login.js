import { StatusBar } from 'expo-status-bar';
import { Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './Styles';

export default function App() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));

    useEffect(() => {
        Animated.spring(offset.y, {
            toValue: 0,
            speed: 3,
            bounciness: 20,
        }).start();
    }, [])

    return (

        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerMenu}>
                <Image style={styles.logo} resizeMode='contain' source={require('./assets/img/logo2.png')}></Image>
            </View>
            <Text style = {styles.login}>Login</Text>
            <Animated.View style={[styles.container, { transform: [{ translateY: offset.y }] }]} >
                

                <TextInput style={styles.inputs} placeholder='E-mail' autoCorrect={false} onChange={() => { }} />
                <TextInput style={styles.inputs} placeholder='Senha' autoCorrect={false} onChange={() => { }} />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitTxt}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.submitTxt}>Criar conta</Text>
                </TouchableOpacity>
            </Animated.View>
            <Text style = {styles.organiz}>OrganiZ</Text>
            <StatusBar style="auto" />

        </KeyboardAvoidingView>
    );
}