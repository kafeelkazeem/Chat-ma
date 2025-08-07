import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#24786D',
        tabBarInactiveTintColor: '#8E8E93', // Inactive icon color
        tabBarStyle: {
          backgroundColor: '#F8F8F8', // Background color of the tab bar
          height: 60 + insets.bottom, // Dynamically adjust height
          paddingBottom: insets.bottom, // Add padding for safe area
        },
      }}
    >
      {/* Messages Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={26} color={color} />
          ),
          headerShown: true,
          tabBarLabelStyle: { fontSize: 13, letterSpacing: 1 },
        }}
      />

      {/* Friends Tab */}
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group-outline" size={26} color={color} />
          ),
          headerShown: true,
          tabBarLabelStyle: { fontSize: 13, letterSpacing: 1 },
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={26} color={color} />
          ),
          headerShown: true,
          tabBarLabelStyle: { fontSize: 13, letterSpacing: 1 },
        }}
      />
    </Tabs>
  );
}