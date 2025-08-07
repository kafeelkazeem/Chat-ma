import { Text, View } from 'react-native';

export default function SettingsScreen() {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-xl font-bold mb-2.5">This is the Settings screen.</Text>
        <Text>Account settings and app preferences will be here.</Text>
      </View>
    );
  }
  