import { View, Text } from "react-native";

export default function Avater(){
    return(
        <View className="flex flex-col items-center justify-center">
            <View className='w-20 h-20 bg-[#FFC746] border-orange-400 rounded-full m-1 border-2 flex justify-center items-center'>
                <Text className='text-black text-3xl'>A</Text>
            </View>
            <Text className="text-white text-center">Avater</Text>
        </View>
    )
}