import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import AuthBtn from "@/components/button/authBtn";
import { Link, useRouter } from "expo-router";
import axios, { AxiosError } from "axios";
import { apiUrl } from "@/constants/apiUrl";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the shape of the successful response from your API
interface LoginResponse {
    token: string;
    user: {
        id: String,
        name: String
    }
}

export default function Signin() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        try {
            if (!email || !password) {
                Alert.alert("Login Failed", "Please enter both email and password.");
                return;
            }
            const res = await axios.post<LoginResponse>(`${apiUrl}/signin`, { email, password });
            const { token } = res.data;
            if (token) {
                // Store the JWT token securely
                await AsyncStorage.setItem('userToken', token);
                console.log("Token stored successfully:", token);

                router.navigate('/(tabs)');
            } else {
                Alert.alert("Login Failed", "No token received from the server. Please try again.");
            }
        } catch (error) {
            console.log(error)
            // Handle Axios errors with type safety
            const axiosError = error as AxiosError;
            console.error("Login error:", axiosError.response?.data || axiosError.message);
            const errorMessage = (axiosError.response?.data as { message: string })?.message || "An unexpected error occurred. Please try again.";
            Alert.alert("Login Failed", errorMessage);
        }
    };

    return (
        <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled">
                <View className="flex-1 w-screen bg-white p-4">
                    <View className="w-full p-4">
                        <Text className="font-semibold text-xl text-center mt-3">Login to Chattr</Text>
                        <Text className="text-center text-lg text-[#797C7B] mt-3">Welcome back, sign in using your social media account or email to continue</Text>
                    </View>
                    <View className="flex flex-row w-[80%] justify-around mx-auto items-center p-2 mt-7">
                        <TouchableOpacity>
                            <View className="w-20 h-20 rounded-full border-gray-400 border flex justify-center items-center">
                                <AntDesign name="facebook-square" size={30} color="black" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className="w-20 h-20 rounded-full border-gray-400 border flex justify-center items-center">
                                <AntDesign name="google" size={30} color="black" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className="w-20 h-20 rounded-full border-gray-400 border flex justify-center items-center">
                                <AntDesign name="apple1" size={30} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text className="text-base text-center text-slate-300 mt-6 mb-2">OR</Text>
                    <View className="w-full flex flex-col gap-4 p-1">
                        {/* Email Input Field */}
                        <TextInput
                            placeholder="Email"
                            className="w-full text-lg p-3 mb-5 border-b border-[#CDD1D0] bg-white"
                            placeholderTextColor='#24786D'
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                        {/* Password Input Field */}
                        <TextInput
                            className="w-full text-lg p-3 mb-5 border-b border-[#CDD1D0] bg-white"
                            placeholder="Password"
                            placeholderTextColor='#24786D'
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View className="w-full mt-7">
                        <AuthBtn title='Login' onPress={handleLogin} />
                        <Link className="mt-7" href={'/'}><Text className="text-[#24786D] text-lg text-center">Forgot Password?</Text></Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}