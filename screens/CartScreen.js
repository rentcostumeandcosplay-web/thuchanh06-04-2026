import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const cartItems = [
  { 
    id: '1', 
    name: 'Bell Pepper Red', 
    unit: '1kg, Price', 
    price: '$4.99', 
    qty: 1, 
    image: require('./../assets/bell_pepper_red.png'), 
  },
  { 
    id: '2', 
    name: 'Egg Chicken Red', 
    unit: '4pcs, Price', 
    price: '$1.99', 
    qty: 1, 
    image: require('./../assets/egg_chicken_red.png'), 
  },
  { 
    id: '3', 
    name: 'Organic Bananas', 
    unit: '12kg, Price', 
    price: '$3.00', 
    qty: 1, 
    image: require('./../assets/organic_bananas.png'), 
  },
  { 
    id: '4', 
    name: 'Ginger', 
    unit: '250gm, Price', 
    price: '$2.99', 
    qty: 1, 
    image: require('./../assets/ginger.png'), 
  },
];
export default function CartScreen() {
  
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      
      <Image 
        source={item.image} 
        style={styles.cartImage} 
        resizeMode="contain" 
      />
      
      <View style={styles.cartDetails}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemName}>{item.name}</Text>
          <TouchableOpacity>
            <AntDesign name="close" size={20} color="#B3B3B3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemUnit}>{item.unit}</Text>
        <View style={styles.itemFooter}>
          <View style={styles.qtyBox}>
            <TouchableOpacity style={styles.qtyBtn}>
              <AntDesign name="minus" size={18} color="#B3B3B3" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{item.qty}</Text>
            <TouchableOpacity style={styles.qtyBtnActive}>
              <AntDesign name="plus" size={18} color="#53B175" />
            </TouchableOpacity>
          </View>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>
      <View style={styles.divider} />
      
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.priceBadge}>
            <Text style={styles.priceBadgeText}>$12.96</Text>
          </View>
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
  cartItem: { flexDirection: 'row', padding: 20, alignItems: 'center' },
  
  cartImage: { width: 70, height: 70, marginRight: 20 },
  
  cartDetails: { flex: 1 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  itemUnit: { fontSize: 14, color: '#7C7C7C', marginVertical: 5 },
  itemFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  qtyBox: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 40, height: 40, borderRadius: 15, borderWidth: 1, borderColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center' },
  qtyBtnActive: { width: 40, height: 40, borderRadius: 15, borderWidth: 1, borderColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center' },
  qtyText: { marginHorizontal: 15, fontSize: 16, fontWeight: '600' },
  itemPrice: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  footer: { position: 'absolute', bottom: 20, left: 20, right: 20 },
  checkoutBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 19, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  checkoutText: { color: '#FFF', fontSize: 18, fontWeight: '600' },
  priceBadge: { position: 'absolute', right: 20, backgroundColor: '#489E67', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 4 },
  priceBadgeText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' }
});