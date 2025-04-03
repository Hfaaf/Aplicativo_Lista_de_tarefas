import React, { useState } from "react";

import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { useNavigation, NavigationProp } from "@react-navigation/core";

import Logo from '../../assets/logo.png'
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [loading, setLoading] = useState(false)

    async function getLogin() {
        try {
            setLoading(true)

            if (!email || !password) {
                setLoading(false)
                return Alert.alert('Atenção', 'informe todos os campos')
            }   else if (email == 'a' && password == 'a') {
                setEmail('')
                setPassword('')

                navigation.reset({routes:[{name:"BottomRoutes"}]})
            } else {
                Alert.alert('Usuario não encontrado!')
                setEmail('')
                setPassword('')
            }
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={{
                        height: 80,
                        width: 80,
                    }}
                    resizeMode="contain"
                />
                <Text
                    style={style.title}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE EMAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"

                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName={showPassword ? "eye-closed" : "eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={style.boxBottom}>
                <Button
                    text="ENTRAR"
                    loading={loading}
                    onPress={() => getLogin()}
                />
            </View>
            <Text style={{
                fontSize: 16,
                color: themas.colors.gray
            }}
            >
                Não tem conta? <Text style={{ color: themas.colors.primary }}>crie agora!</Text>
            </Text>
        </View>
    )
}