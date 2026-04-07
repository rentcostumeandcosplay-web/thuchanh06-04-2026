import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import ExploreScreen from './ExploreScreen';
import CartScreen from './CartScreen';
import FavouriteScreen from './FavouriteScreen';
import ShopScreen from './ShopScreen';
import FindProductsScreen from './FindProductsScreen';

const Tab = createBottomTabNavigator();

const PlaceholderScreen = ({ name }) => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>{name} Screen</Text>
    <Text style={styles.subText}>Coming Soon...</Text>
  </View>
);

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: '#181725',
        tabBarStyle: { height: 70, paddingBottom: 10 },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Shop" 
        component={ShopScreen} // <--- Thay cái Placeholder cũ bằng cái này
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="store" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="Explore" 
        component={FindProductsScreen}
        options={{ 
          tabBarIcon: ({color}) => <Feather name="search" size={24} color={color} /> 
        }}
      />

      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ 
          tabBarIcon: ({color}) => <MaterialIcons name="shopping-cart" size={26} color={color} /> 
        }}
      />

      <Tab.Screen 
        name="Favourite" 
        component={FavouriteScreen} 
        options={{ 
          tabBarIcon: ({color}) => <MaterialIcons name="favorite-border" size={26} color={color} /> 
        }}
      />

      <Tab.Screen 
        name="Account" 
        children={() => <PlaceholderScreen name="Account" />} 
        options={{ 
          tabBarIcon: ({color}) => <MaterialIcons name="person-outline" size={26} color={color} /> 
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
  },
  placeholderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#181725',
  },
  subText: {
    fontSize: 16,
    color: '#7C7C7C',
    marginTop: 10,
  },
});