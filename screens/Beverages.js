import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView,
  TextInput 
} from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

// --- IMPORT TỪ KHO TỔNG ---
import { products } from '../data'; 

export default function BeveragesScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");

  // --- LOGIC LỌC DỮ LIỆU ---
  // 1. Chỉ lấy những món có category là 'Beverages'
  // 2. Lọc theo tên sản phẩm dựa trên nội dung ô Search
  const filteredBeverages = products.filter(item => {
    const isBeverage = item.category === 'Beverages';
    const isMatchSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return isBeverage && isMatchSearch;
  });

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image 
        source={item.image} 
        style={styles.productImage} 
        resizeMode="contain" 
      />
      <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.productUnit}>{item.unit}</Text>
      
      <View style={styles.productBottom}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-left" size={28} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={22} color="#181725" />
        </TouchableOpacity>
      </View>

      {/* Thanh Search - Thêm vào để thầy thấy dữ liệu động */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="#181725" style={{marginRight: 10}} />
          <TextInput 
            placeholder="Search Beverages"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {/* Danh sách */}
      <FlatList
        data={filteredBeverages} // Dùng dữ liệu đã lọc
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Text style={{color: '#7C7C7C'}}>No beverages found.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  searchSection: { paddingHorizontal: 20, marginBottom: 10 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 45
  },
  searchInput: { flex: 1, fontWeight: '600' },
  listContent: { paddingHorizontal: 10, paddingBottom: 20 },
  productCard: {
    flex: 1, margin: 10, padding: 15, borderRadius: 18,
    borderWidth: 1, borderColor: '#E2E2E2', backgroundColor: '#FFF',
    justifyContent: 'space-between',
  },
  productImage: { height: 90, width: '100%', marginBottom: 15 },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#181725', height: 40 },
  productUnit: { fontSize: 14, color: '#7C7C7C', marginBottom: 10 },
  productBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productPrice: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  addButton: { 
    backgroundColor: '#53B175', width: 45, height: 45, 
    borderRadius: 17, justifyContent: 'center', alignItems: 'center' 
  },
});