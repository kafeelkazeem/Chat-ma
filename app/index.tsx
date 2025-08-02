import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index(){
    const route = useRouter()
    return(
        <View className="flex-1 w-full justify-center items-center">
            <TouchableOpacity onPress={() => route.navigate('/home')}><Text className="text-red-700 text-3xl">Hello</Text></TouchableOpacity>
        </View>
    )
}