import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const favItems = [
  { id: '1', name: 'Sprite Can', unit: '325ml, Price', price: '$1.50', image: require('./../assets/sprite_can.png') },
  { id: '2', name: 'Diet Coke', unit: '355ml, Price', price: '$1.99', image: require('../assets/diet_coke.png') },
  { id: '3', name: 'Apple & Grape Juice', unit: '2L, Price', price: '$15.50', image: require('../assets/apple_and_grape_juice.png') }, 
  { id: '4', name: 'Coca Cola Can', unit: '325ml, Price', price: '$4.99', image: require('../assets/coca_cola_can.png') },
  { id: '5', name: 'Pepsi Can', unit: '330ml, Price', price: '$4.99', image: require('../assets/pepsi_can.png') },
  { id: '6', name: 'Monster Energy Drink', unit: '500ml, Price', price: '$1.50', image: require('../assets/monster.png') },
  { id: '7', name: 'Monster Energy Drink', unit: '500ml, Price', price: '$1.50', image: require('../assets/white_monster.png') },
];


export default function FavouriteScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.favItem}>
      <Image source={item.image} style={styles.favImage} resizeMode="contain" />
      <View style={styles.favDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemUnit}>{item.unit}</Text>
      </View>
      <View style={styles.favRight}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#181725" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerTitle}>Favorurite</Text></View>
      <View style={styles.divider} />
      <FlatList
        data={favItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { paddingVertical: 20, alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  divider: { height: 1, backgroundColor: '#E2E2E2', marginHorizontal: 20 },
  favItem: { flexDirection: 'row', padding: 20, alignItems: 'center' },
  favImage: { width: 55, height: 55, marginRight: 20 },
  favDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  itemUnit: { fontSize: 14, color: '#7C7C7C', marginTop: 5 },
  favRight: { flexDirection: 'row', alignItems: 'center' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#181725', marginRight: 10 },
  footer: { position: 'absolute', bottom: 20, left: 20, right: 20 },
  addBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 19, justifyContent: 'center', alignItems: 'center' },
  addBtnText: { color: '#FFF', fontSize: 18, fontWeight: '600' }
});