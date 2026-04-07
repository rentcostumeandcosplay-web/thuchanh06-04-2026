import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image, TextInput, 
  TouchableOpacity, FlatList, SafeAreaView 
} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import FilterModal from './FilterModal'; // Đảm bảo bạn có file này

import { products } from '../data'; 

export default function ProductListScreen({ navigation }) {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Lọc dữ liệu: Chỉ lấy Dairy & Eggs VÀ khớp với tên tìm kiếm
  const dataToDisplay = products.filter(item => {
    const isCategory = item.category === 'Dairy & Eggs';
    const isMatch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return isCategory && isMatch;
  });

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
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
      {/* Header: Nút quay lại và Tiêu đề */}
      <View style={styles.backHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <AntDesign name="left" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dairy & Eggs</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* --- PHẦN QUAN TRỌNG: SEARCH BAR + FILTER --- */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
            <Feather name="search" size={20} color="#181725" style={styles.searchIcon} />
            <TextInput 
              style={styles.searchInput} 
              placeholder="Search Store"
              value={searchText}
              onChangeText={setSearchText}
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <AntDesign name="closecircle" size={16} color="#7C7C7C" />
              </TouchableOpacity>
            )}
        </View>
        
        {/* Nút Filter đã quay trở lại ở đây */}
        <TouchableOpacity 
          style={styles.filterBtn} 
          onPress={() => setFilterVisible(true)}
        >
          <Feather name="sliders" size={24} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataToDisplay} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>No items found</Text>}
      />

      <FilterModal 
        visible={isFilterVisible} 
        onClose={() => setFilterVisible(false)} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  backHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backBtn: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  
  // Style cho cụm Search và Filter nằm cùng 1 hàng
  searchHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
  searchBar: { 
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F2F3F2',
    borderRadius: 15, 
    paddingHorizontal: 15, 
    height: 50 
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, fontWeight: '600', color: '#181725' },
  filterBtn: { marginLeft: 15 }, // Khoảng cách giữa thanh search và nút filter

  listContent: { paddingHorizontal: 10, paddingBottom: 20 },
  productCard: { 
    flex: 1, margin: 10, padding: 15, borderRadius: 18, 
    borderWidth: 1, borderColor: '#E2E2E2', backgroundColor: '#FFF' 
  },
  productImage: { height: 100, width: '100%', marginBottom: 15 },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#181725', marginBottom: 5 },
  productUnit: { fontSize: 14, color: '#7C7C7C', marginBottom: 15 },
  productBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productPrice: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  addButton: { 
    backgroundColor: '#53B175', width: 45, height: 45, 
    borderRadius: 17, justifyContent: 'center', alignItems: 'center' 
  },
  emptyText: { textAlign: 'center', marginTop: 20, color: '#7C7C7C' }
});