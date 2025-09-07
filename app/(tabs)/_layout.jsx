import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0AD957',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'index') iconName = 'home';
          else if (route.name === 'favorites') iconName = 'heart';
          else if (route.name === 'meal-planner') iconName = 'restaurant';
          else if (route.name === 'profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="favorites" options={{ title: 'Favorites' }} />
      <Tabs.Screen name="meal-planner" options={{ title: 'Meal Planner' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="food/[id]" options={{ title: 'Food Detail', tabBarButton: () => null }} />
      {/* The food detail screen is hidden from tab bar */}
    </Tabs>
  );
}
