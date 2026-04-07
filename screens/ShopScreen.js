import React from 'react';
import { 
  StyleSheet, Text, View, Image, TextInput, 
  TouchableOpacity, FlatList, SafeAreaView, ScrollView 
} from 'react-native';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

// Dữ liệu cho các mục trượt ngang
const exclusiveOffers = [
  { id: '1', name: 'Organic Bananas', unit: '7pcs, Priceg', price: '$4.99', image: require('../assets/organic_bananas.png') },
  { id: '2', name: 'Red Apple', unit: '1kg, Priceg', price: '$4.99', image: require('../assets/red_apple.png') },
];

const groceryCategories = [
  { id: '1', name: 'Pulses', color: '#F8A44C26', image: require('../assets/pulses.png') },
  { id: '2', name: 'Rice', color: '#53B17526', image: require('../assets/rice.png') },
];

const meatItems = [
  { id: '1', name: 'Beef Bone', unit: '1kg, Priceg', price: '$4.99', image: require('../assets/beef_bone.png') },
  { id: '2', name: 'Broiler Chicken', unit: '1kg, Priceg', price: '$4.99', image: require('../assets/chicken.png') },
];

export default function ShopScreen({ navigation }) {
  
  // Render thẻ sản phẩm thông thường
  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => {
        // KIỂM TRA: Chỉ cho phép chuyển sang ProductDetail nếu tên là Red Apple
        if (item.name === 'Red Apple') {
          navigation.navigate('ProductDetail');
        }
      }}
      // Vô hiệu hóa hiệu ứng nhấn (opacity) nếu không phải là Red Apple
      activeOpacity={item.name === 'Red Apple' ? 0.7 : 1}
    >
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardUnit}>{item.unit}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <AntDesign name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // Render thẻ danh mục Groceries (Pulses/Rice)
  const renderGroceryCat = ({ item }) => (
    <View style={[styles.groceryCard, { backgroundColor: item.color }]}>
      <Image source={item.image} style={styles.groceryImg} resizeMode="contain" />
      <Text style={styles.groceryText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 1. Header & Search */}
        <View style={styles.header}>
          <Image source={require('../assets/carrot.png')} style={{width: 25, height: 30}} />
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <MaterialIcons name="location-on" size={20} color="#4C4F4D" />
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Dhaka, Banassre</Text>
          </View>
        </View>

        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="black" />
          <TextInput placeholder="Search Store" style={{marginLeft: 10, flex: 1}} />
        </View>

        {/* 2. Banner */}
        <Image source={require('../assets/discount.png')} style={styles.banner} resizeMode="stretch" />

        {/* 3. Exclusive Offer Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <FlatList
          data={exclusiveOffers}
          renderItem={renderProduct}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingLeft: 20}}
        />

        {/* 4. Best Selling Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <FlatList
          data={exclusiveOffers} 
          renderItem={renderProduct}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id + 'best'}
          contentContainerStyle={{paddingLeft: 20}}
        />

        {/* 5. Groceries Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        
        <FlatList
          data={groceryCategories}
          renderItem={renderGroceryCat}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id + 'cat'}
          contentContainerStyle={{paddingLeft: 20, marginBottom: 20}}
        />

        <FlatList
          data={meatItems}
          renderItem={renderProduct}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id + 'meat'}
          contentContainerStyle={{paddingLeft: 20}}
        />

        <View style={{height: 100}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { alignItems: 'center', marginVertical: 20 },
  searchBar: {
    flexDirection: 'row', backgroundColor: '#F2F3F2', 
    marginHorizontal: 20, padding: 15, borderRadius: 15, alignItems: 'center'
  },
  banner: { width: '90%', height: 115, alignSelf: 'center', marginTop: 20, borderRadius: 15 },
  sectionHeader: { 
    flexDirection: 'row', justifyContent: 'space-between', 
    paddingHorizontal: 20, marginTop: 25, marginBottom: 15 
  },
  sectionTitle: { fontSize: 24, fontWeight: 'bold' },
  seeAll: { color: '#53B175', fontSize: 16, fontWeight: '600' },
  card: {
    width: 173, padding: 15, borderRadius: 18, 
    borderWidth: 1, borderColor: '#E2E2E2', marginRight: 15
  },
  cardImage: { width: '100%', height: 80, marginBottom: 15 },
  cardName: { fontWeight: 'bold', fontSize: 16 },
  cardUnit: { color: '#7C7C7C', marginVertical: 5 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardPrice: { fontSize: 18, fontWeight: 'bold' },
  addBtn: { backgroundColor: '#53B175', padding: 10, borderRadius: 15 },
  groceryCard: {
    flexDirection: 'row', alignItems: 'center', width: 248, height: 105,
    borderRadius: 18, marginRight: 15, padding: 15
  },
  groceryImg: { width: 70, height: 70, marginRight: 15 },
  groceryText: { fontSize: 20, fontWeight: 'bold', color: '#3E423F' }
});