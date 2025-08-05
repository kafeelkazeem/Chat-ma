import AuthBtn from "@/components/button/authBtn";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";

export default function Signup(){
    return(
        <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled">
                <View className="flex-1 w-screen bg-white p-4">
                    <View className="w-full p-4">
                        <Text className="font-semibold text-xl text-center mt-3">Sign up with mail</Text>
                        <Text className="text-center text-lg text-[#797C7B] mt-3">Get chatting with friends and family today by signning up in our chat app!</Text>
                    </View>
                    <View className="w-full flex flex-col gap-4 p-1 mt-5">
                        <TextInput 
                            placeholder="User Name"
                            className="w-full text-lg p-3 mb-5 border-b border-[#CDD1D0] bg-white"
                            placeholderTextColor='#24786D'
                            autoCapitalize="none" // Prevents auto-capitalization
                        />
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
                        <TextInput
                            className="w-full text-lg p-3 mb-5 border-b border-[#CDD1D0] bg-white"
                            placeholder="Comfirm Password"
                            placeholderTextColor='#24786D'
                            secureTextEntry // Hides the password text
                        />
                    </View>
                    <View className="w-full mt-7">
                        <AuthBtn title='Sign up' onPress={() => console.log('signupped')} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}