import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FilterModal({ visible, onClose }) {
  const CheckItem = ({ label, checked }) => (
    <View style={styles.checkRow}>
      <View style={[styles.square, checked && styles.squareActive]}>
        {checked && <AntDesign name="check" size={16} color="#FFF" />}
      </View>
      <Text style={[styles.checkText, checked && {color: '#53B175'}]}>{label}</Text>
    </View>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}><AntDesign name="close" size={24} /></TouchableOpacity>
            <Text style={styles.headerTitle}>Filters</Text>
            <View style={{width: 24}} />
          </View>

          <ScrollView style={{flex: 1}}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <CheckItem label="Eggs" checked={true} />
            <CheckItem label="Noodles & Pasta" checked={false} />
            <CheckItem label="Chips & Crisps" checked={false} />
            <CheckItem label="Fast Food" checked={false} />

            <Text style={[styles.sectionTitle, {marginTop: 30}]}>Brand</Text>
            <CheckItem label="Individual Collection" checked={false} />
            <CheckItem label="Cocola" checked={true} />
            <CheckItem label="Ifad" checked={false} />
            <CheckItem label="Kazi Farmas" checked={false} />
          </ScrollView>

          <TouchableOpacity style={styles.applyBtn} onPress={onClose}>
            <Text style={styles.applyText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  content: { backgroundColor: '#F2F3F2', borderTopLeftRadius: 30, borderTopRightRadius: 30, height: '90%', padding: 25 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  sectionTitle: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  square: { width: 24, height: 24, borderRadius: 8, borderWidth: 1, borderColor: '#B1B1B1', marginRight: 15, justifyContent: 'center', alignItems: 'center' },
  squareActive: { backgroundColor: '#53B175', borderColor: '#53B175' },
  checkText: { fontSize: 16, color: '#181725' },
  applyBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  applyText: { color: '#FFF', fontSize: 18, fontWeight: '600' }
});