import React, { useState } from 'react'; // Thêm useState
import { 
  StyleSheet, Text, View, Image, TextInput, 
  TouchableOpacity, FlatList, SafeAreaView 
} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

// --- IMPORT KHO TỔNG ---
import { products } from '../data'; 

const categories = [
  { id: '1', name: 'Fresh Fruits\n& Vegetable', color: '#BDEFFF26', image: require('../assets/fresh_fruits_and_veggie.png'), borderColor: '#BDEFFF' },
  { id: '2', name: 'Cooking Oil\n& Ghee', color: '#F8A44C26', image: require('../assets/cooking_oil_and_ghee.png'), borderColor: '#F8A44C' },
  { id: '3', name: 'Meat & Fish', color: '#F7A59326', image: require('../assets/meat_and_fish.png'), borderColor: '#F7A593' },
  { id: '4', name: 'Bakery & Snacks', color: '#D3B0E026', image: require('../assets/bakery_and_snacks.png'), borderColor: '#D3B0E0' },
  { id: '5', name: 'Dairy & Eggs', color: '#FDE59826', image: require('../assets/dairy_and_eggs.png'), borderColor: '#FDE598' },
  { id: '6', name: 'Beverages', color: '#B7DFF526', image: require('../assets/beverages.png'), borderColor: '#B7DFF5' },
];

export default function FindProductsScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");

  // --- LOGIC TÌM KIẾM ---
  const searchResults = products.filter(item => 
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Render ô danh mục (khi chưa search)
  const renderCategory = ({ item }) => (
    <TouchableOpacity 
      style={[styles.categoryCard, { backgroundColor: item.color, borderColor: item.borderColor }]}
      onPress={() => {
        if (item.id === '5') navigation.navigate('ProductList');
        else if (item.id === '6') navigation.navigate('Beverages');
      }}
    >
      <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryName} numberOfLines={2}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Render ô sản phẩm (khi đang search)
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      {/* Thanh Search Header */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="black" />
          <TextInput 
            placeholder="Search Store" 
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <AntDesign name="closecircle" size={16} color="#7C7C7C" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* HIỂN THỊ CÓ ĐIỀU KIỆN */}
      {searchText.length === 0 ? (
        // Nếu không search: Hiện Categories
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        // Nếu có search: Hiện kết quả từ data.js
        <FlatList
          data={searchResults}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text style={styles.emptyText}>No products found.</Text>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { alignItems: 'center', marginTop: 20, marginBottom: 15 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  searchBarContainer: { paddingHorizontal: 20, marginBottom: 20 },
  searchBar: {
    flexDirection: 'row', backgroundColor: '#F2F3F2', 
    padding: 15, borderRadius: 15, alignItems: 'center',
  },
  searchInput: { marginLeft: 10, flex: 1, fontSize: 16 },
  listContent: { paddingHorizontal: 10, paddingBottom: 20 },
  categoryCard: {
    flex: 1, margin: 10, padding: 15, borderRadius: 18, 
    borderWidth: 1, height: 180, alignItems: 'center', justifyContent: 'center'
  },
  categoryImage: { width: 100, height: 80, marginBottom: 15 },
  categoryName: { fontSize: 16, fontWeight: '600', color: '#181725', textAlign: 'center' },
  
  // Style cho phần sản phẩm khi search hiện ra
  productCard: {
    flex: 1, margin: 10, padding: 10, borderRadius: 15,
    borderWidth: 1, borderColor: '#E2E2E2', alignItems: 'center'
  },
  productImage: { width: 80, height: 80, marginBottom: 10 },
  productName: { fontWeight: 'bold', textAlign: 'center' },
  productPrice: { color: '#53B175', marginTop: 5 },
  emptyText: { textAlign: 'center', marginTop: 50, color: '#7C7C7C' }
});