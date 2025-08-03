import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index(){
    const route = useRouter()
    return(
        <View className="flex-1 w-full justify-center items-center">
            <LinearGradient colors={['#43116A', '#0A1832']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
            className="flex-1 w-screen pt-10">
                <View className="w-screen pt-10 flex flex-row justify-center items-center gap-1">
                    <Text className="text-white text-2xl font-semibold tracking-wider text-center">Chattr</Text>
                    <MaterialIcons className="-mt-5 -ml-2" name="connect-without-contact" size={35} color="white" />
                </View>
                <View className="p-3 pt-7 pl-4">
                    <Text className="text-white text-6xl leading-normal font-light">Connect friends <Text className="font-bold">easily</Text> & <Text className="font-bold">quickly</Text></Text>
                    <Text className="text-[#B9C1BE] text-lg">Our chat app is the perfect way to stay connected with friends and family</Text>
                </View>
                <View className="flex flex-row w-[80%] justify-around mx-auto items-center p-2 mt-10">
                    <TouchableOpacity>
                        <View className="w-20 h-20 rounded-full border-gray-400 border flex justify-center items-center">
                            <AntDesign name="facebook-square" size={30} color="white" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="w-20 h-20 rounded-full border-gray-400 border flex justify-center items-center">
                            <AntDesign name="google" size={30} color="white" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="w-20 h-20 rounded-full border-gray-400 border flex justify-center items-center">
                            <AntDesign name="apple1" size={30} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text className="text-base text-center text-slate-300 mt-6 mb-6">OR</Text>
                <View className="w-full">
                    <TouchableOpacity className="bg-white w-[75%] mx-auto py-4 rounded-2xl mt-1"><Text className="text-black text-lg text-center font-semibold">Sign up with mail</Text></TouchableOpacity>
                    <Text className="text-white text-xl text-center mt-5">Existing account? <Link href='/' className="font-bold">Login</Link></Text>
                </View>
            </LinearGradient>
        </View> 
    )
}