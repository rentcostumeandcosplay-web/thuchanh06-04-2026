// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import các file màn hình
import MainTab from './screens/MainTab'; 
import ProductListScreen from './screens/ExploreScreen'; 
import BeveragesScreen from './screens/Beverages'; 
import ProductDetail from './screens/ProductDetail'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          {/* Màn hình chính chứa thanh Bottom Tab */}
          <Stack.Screen name="Main" component={MainTab} />
          
          {/* --- ĐĂNG KÝ CÁC MÀN HÌNH MỚI CHO STACK --- */}
          
          {/* Màn hình danh sách Trứng/Mì (Màn hình Explore cũ) */}
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          
          {/* Màn hình danh sách đồ uống Beverages */}
          <Stack.Screen name="Beverages" component={BeveragesScreen} />
          
          {/* Màn hình chi tiết sản phẩm (nếu có) */}
          <Stack.Screen name="ProductDetail" component={ProductDetail} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}