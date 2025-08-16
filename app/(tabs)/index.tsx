import { ScrollView, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import Avater from '@/components/avater';
import Friend from '@/components/friend';
import { useRouter } from 'expo-router';

export default function MessagesScreen() {
    const router = useRouter()
    return (
      <View className="flex-1 bg-[#000E08] w-full">
        <StatusBar style='light' />
        <View className='flex w-full flex-row mt-12 p-6 px-0 justify-around items-center'>
          <View className='w-12 h-12 rounded-full border-gray-400 border flex justify-center items-center'>
            <AntDesign name="search1" size={24} color="white" />
          </View>
          <View className='basis-1/2'>
            <Text className='text-white text-2xl text-center'>Home</Text>
          </View>
          <View className='w-14 h-14 bg-blue-400 rounded-full border flex justify-center items-center'>
            <Text className='text-white'>A</Text>
          </View>
        </View>
        <View className='w-full mt-3'>
          <ScrollView className='p-2 gap-4 flex flex-row' horizontal showsHorizontalScrollIndicator={false}>
            <Avater />
            <Avater />
            <Avater />
            <Avater />
            <Avater />
            <Avater />
            <Avater />
            <Avater />
            <Avater />
            <Avater />
            <Avater />
            <Avater />
          </ScrollView>
        </View>
        <View className='w-full flex-1 bg-white mt-4 rounded-t-[2.3rem]'>
          <ScrollView className='w-full flex p-2 pt-5'>
            <Friend onPress={() => router.navigate('/chatRoom')}/>
          </ScrollView>
        </View>
      </View>
    );
  }