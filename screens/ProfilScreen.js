import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

export default function ProfilScreen() {
  const [modalVisible, setModalVisible] = useState(false)

  // Test üçün funksiyalar
  const setFilteredData = (text) => {
    console.log("Axtarış mətni:", text)
  }

  const filterByPrice = () => {
    console.log("Qiymətə görə filter tətbiq olundu")
  }

  const filterByDate = () => {
    console.log("Tarixə görə filter tətbiq olundu")
  }

  return (
    <View className='flex-row justify-evenly items-center'>

      {/* Search input */}
      <View className='w-4/5 h-14 ml-5 rounded-2xl bg-white flex-row items-center'>
        <Ionicons className="p-2" name="search" size={32} color={colors.primary} />
        <TextInput
          onChangeText={(text) => setFilteredData(text)}
          className='w-4/5 text-xl mx-1 p-2'
          color={colors.primary}
          placeholder="Axtar..."
        />
      </View>

      {/* Options button */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons name="options" size={32} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal

animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filtrlər</Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                filterByPrice()
                setModalVisible(false)
              }}
            >
              <Text>Qiymətə görə</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                filterByDate()
                setModalVisible(false)
              }}
            >
              <Text>Yüklənmə tarixinə görə</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#eee' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text>Bağla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  modalButton: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
});
