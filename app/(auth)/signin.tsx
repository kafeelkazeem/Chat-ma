import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import AuthBtn from "@/components/button/authBtn";
import { Link, useRouter } from "expo-router";

export default function Signin(){
    const router = useRouter()
    return(
        <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled">
                <View className="flex-1 w-screen bg-white p-4">
                    <View className="w-full p-4">
                        <Text className="font-semibold text-xl text-center mt-3">Login to Chattr</Text>
                        <Text className="text-center text-lg text-[#797C7B] mt-3">Welcome back, sign in using your social media account to continue</Text>
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
                            keyboardType="email-address" // Optimizes the keyboard for email input
                            autoCapitalize="none" // Prevents auto-capitalization
                        />
                        {/* Password Input Field */}
                        <TextInput
                            className="w-full text-lg p-3 mb-5 border-b border-[#CDD1D0] bg-white"
                            placeholder="Password"
                            placeholderTextColor='#24786D'
                            secureTextEntry // Hides the password text
                        />
                    </View>
                    <View className="w-full mt-7">
                        <AuthBtn title='Login' onPress={() => router.navigate('/(tabs)')} />
                        <Link className="mt-7" href={'/'}><Text className="text-[#24786D] text-lg text-center">Forgot Password?</Text></Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}