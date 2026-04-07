import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';

export default function ProductDetail({ navigation }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Image Section */}
        <View style={styles.imageSection}>
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="chevron-left" size={30} color="#181725" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="share" size={24} color="#181725" />
            </TouchableOpacity>
          </View>
          
          <Image 
            source={require('../assets/red_apple.png')} // Đảm bảo tên file khớp trong assets
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Content Section */}
        <View style={styles.detailsSection}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.productName}>Naturel Red Apple</Text>
              <Text style={styles.productUnit}>1kg, Price</Text>
            </View>
            <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
              <AntDesign 
                name={isFavourite ? "heart" : "hearto"} 
                size={24} 
                color={isFavourite ? "#53B175" : "#7C7C7C"} 
              />
            </TouchableOpacity>
          </View>

          {/* Quantity and Price */}
          <View style={styles.priceRow}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity 
                onPress={() => quantity > 1 && setQuantity(quantity - 1)}
                style={styles.quantityBtn}
              >
                <AntDesign name="minus" size={20} color="#B3B3B3" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity 
                onPress={() => setQuantity(quantity + 1)}
                style={styles.quantityBtn}
              >
                <AntDesign name="plus" size={20} color="#53B175" />
              </TouchableOpacity>
            </View>
            <Text style={styles.priceText}>$4.99</Text>
          </View>

          <View style={styles.divider} />

          {/* Product Detail Accordion */}
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Entypo name="chevron-small-down" size={24} color="#181725" />
          </TouchableOpacity>
          <Text style={styles.description}>
            Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healthful and varied diet.
          </Text>

          {/* Nutritions Accordion */}
          <View style={styles.divider} />
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Nutritions</Text>
            <View style={styles.accordionRight}>
              <View style={styles.nutritionBadge}>
                <Text style={styles.nutritionText}>100gr</Text>
              </View>
              <Entypo name="chevron-small-right" size={24} color="#181725" />
            </View>
          </TouchableOpacity>

          {/* Review Accordion */}
          <View style={styles.divider} />
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Review</Text>
            <View style={styles.accordionRight}>
              <View style={styles.ratingStars}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <AntDesign key={i} name="star" size={14} color="#F3603F" />
                ))}
              </View>
              <Entypo name="chevron-small-right" size={24} color="#181725" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Add to Basket Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  imageSection: {
    backgroundColor: '#F2F3F2',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 300,
    paddingHorizontal: 20,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  detailsSection: {
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  productName: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  productUnit: { fontSize: 16, color: '#7C7C7C', marginTop: 5 },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  priceText: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  divider: { height: 1, backgroundColor: '#E2E2E2', marginVertical: 15 },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionTitle: { fontSize: 16, fontWeight: '600', color: '#181725' },
  accordionRight: { flexDirection: 'row', alignItems: 'center' },
  description: {
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 21,
    marginTop: 10,
  },
  nutritionBadge: {
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    marginRight: 10,
  },
  nutritionText: { fontSize: 10, color: '#7C7C7C' },
  ratingStars: { flexDirection: 'row', marginRight: 10 },
  footer: { padding: 20 },
  addButton: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: { fontSize: 18, color: '#FFF', fontWeight: 'bold' },
});