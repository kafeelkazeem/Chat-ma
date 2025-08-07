import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF', // Active icon color (iOS blue)
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
            <MaterialCommunityIcons name="message-text" size={24} color={color} />
          ),
          headerShown: true, // Show a header for the Messages screen
        }}
      />

      {/* Friends Tab */}
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" size={24} color={color} />
          ),
          headerShown: true, // Show a header for the Friends screen
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" size={24} color={color} />
          ),
          headerShown: true, // Show a header for the Settings screen
        }}
      />
    </Tabs>
  );
}